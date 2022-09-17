import { MagnifyingGlassPlus } from 'phosphor-react'

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-color-nlw-gradie self-stretch  rounded-lg  mt-8 overflow-hidden ">
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white font-black block text-2xl'> Não encontrou seu duo ? </strong>
            <span className='text-zinc-400 block'>Publique um anúncio para Encontrar Novos players! </span>
          </div>
          <button className='py-3 px-4 rounded bg-violet-500 hover:bg-violet-700 text-white flex items-stretch  gap-2'>
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
  );
}