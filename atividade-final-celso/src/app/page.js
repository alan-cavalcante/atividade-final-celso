import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <p className=" text-3xl font-extrabold left-0 mb-3 top-0 flex w-full justify-center">
          Atividade Final - Celso
        </p>
        <p className="left-0 top-0 flex w-full text-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-yellow-300">
          Organização de Estruturas utilizando QuickSort e SelectionSort
        </p>
      </div>
      <div id='principal' className=' grid grid-cols-5 grid-rows-5 h-screen w-full p-6 gap-2 '>

        <div id='menu' className=' grid grid-cols-1 grid-rows-6 col-span-1 row-span-5 bg-slate-800 p-6 text-center'>
          <div className=' col-span-1 row-span-1 text-center uppercase flex flex-col justify-center p-2 bg-slate-900'>
            <p>Área do Menu</p>
          </div>
        </div>

        <div className='col-span-4 row-span-5 grid grid-cols-2 grid-rows-6 bg-slate-900 '>

          <div className=' col-span-5 row-span-1 grid grid-cols-2 grid-rows-1 gap-2'>

            <div className=' grid grid-cols-1 grid-rows-1 col-span-1 row-span-1 text-center'>
              <div className=' flex flex-col justify-between bg-gray-700 p-2'>
                <p className=' text-4xl text-center'>QuickSort</p>
                <a className=' font-bold uppercase bg-red-400 rounded-sm mx-5 ' >Tempo de execução:</a>
                <p className=' text-3xl text-center items-center justify-center'>00:00</p>
              </div>
            </div>
            <div className=' grid grid-cols-1 grid-rows-1 col-span-1 row-span-1 text-center'>
              <div className='  flex flex-col justify-between bg-gray-700 p-2 '>
                <p className=' text-4xl text-center'>SelectionSort</p>
                <a className=' font-bold uppercase bg-red-400 rounded-sm mx-5 ' >Tempo de execução:</a>
                <p className=' text-3xl text-center items-center justify-center'>00:00</p>
              </div>
            </div>
            
          </div>

          <div className='col-span-2 row-span-5 p-6 bg-gray-700 mt-2'>
            <p>Área da Organização</p>
          </div>
        </div>
      </div>

    </main>
  )
}
