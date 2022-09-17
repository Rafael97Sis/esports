import express from 'express';
import cors from 'cors'
import { PrismaClient  } from "@prisma/client";
import { converterHorasStringToMinutos } from './utils/converter-hora-string-to-minutos';
import { ConverterMinutesStringToHorasStrigs }from './utils/converter-minutes-string-to-minutes'


const app = express()
app.use(express.json)
//app.use(cors())

const prisma = new PrismaClient({
  log:['query']
})

//Lista games Cadastrado..
app.get('/games', async(request, response) => {
  const games = await prisma.game.findMany({
    include:{
      _count:{
        select:{
          ads:true,
        }
      }
    }
  })
  return response.json(games)
})



// porta 
app.listen(3030);
