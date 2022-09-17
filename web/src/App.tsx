import './styles/main.css'
import { useState, useEffect } from 'react'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import logoImg from './assets/Logo-nlw-esports.svg'

function App() {
  interface Game {
    id: string;
    title: string;
    bannerurl: string;
    _count: {
      ads: number;
    }
  }
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3030/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (

    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >
      <img src={logoImg} alt="logo-nlw" />

      <h1 className='text-5xl text-white font-black mt-20 ' >
        Seu <span className="bg-color-nlw-gradie bg-clip-text text-transparent "> duo </span> está aqui.
      </h1>



      <div className='grid grid-cols-6 gap-6 mt-16 ' >
        {games.map(game => {
          return (
            <GameBanner
              title={game.title}
              bannerUrl={game.bannerurl}              
              adsCounter={game._count.ads}
            />
          )
        })}
      </div>

      <CreateAdBanner />

    </div>

  )
}

export default App
