import express, { response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { converterHorasStringToMinutos } from './utils/converter-hora-string-to-minutos'
import { ConverterMinutesStringToHorasStrigs } from './utils/converter-minutes-string-to-minutes'


const app = express()
app.use(express.json())
app.use(cors({
  // incluir dominio para acessar esta API 
}))
const prisma = new PrismaClient({
  log: ['query']
})

//Lista games Cadastrado..
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })
  return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStard: converterHorasStringToMinutos(body.hourStard),
      hourEnd: converterHorasStringToMinutos(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  })

  return response.status(201).json(body)
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      game: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStard: true,
      hourEnd: true
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: ConverterMinutesStringToHorasStrigs(ad.hourStard),
      hourEnd: ConverterMinutesStringToHorasStrigs(ad.hourEnd),
    }
  }))
})
app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  return response.json({
    discord: ad.discord,
  })

})

app.listen(3030)

