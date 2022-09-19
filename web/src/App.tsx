import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import { useState, useEffect } from 'react'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import logoImg from './assets/Logo-nlw-esports.svg'
import { GameController } from 'phosphor-react'

function App() {
  interface Game {
    id: string;
    title: string;
    bannerUrl: string;
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
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCounter={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-lg w-[400px] shadow-lg shadow-white/25 ">

            <Dialog.Title className="text-3x1 text-white font-black"> Publique um anúncio </Dialog.Title>

            <Dialog.Content>
              <form className=''>
                <div>
                  <label htmlFor='game'> Qual o game</label>
                  <input id="game" placeholder='selecione o game que deseja jogar' ></input>
                </div>

                <div>
                  <label htmlFor='game'> Seu nome (ou nickname) </label>
                  <input id="game" placeholder='Como te chamam Dentro do game ?' ></input>
                </div>

                <div>
                  <div >
                    <label htmlFor="yearsPlaying" > Joga a quantos Anos ? </label>
                    <input id="yearPlaying" type="number" placeholder='Tudo bem ser ZERO'  ></input>
                  </div>
                  <div>
                    <label htmlFor='Discord' > Qual seu Discord ? </label>
                    <input id="discord" type="text" placeholder="Usuario#2530" ></input>
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor='weekDays'> Quando Costuma jogar ?</label>
                  </div>
                  <div>
                    <label htmlFor="hourStart"> Qual Horário do dia ?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De"></input>
                      <input id="hourEnd" type="time" placeholder='Até' ></input>
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" >
                    Costumo me Conectar ao chat de voz
                  </input>
                </div>

                <footer>
                  <button> Cancelar </button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
