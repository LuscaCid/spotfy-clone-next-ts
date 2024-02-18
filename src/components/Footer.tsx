import { Laptop2, LayoutList, Maximize, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";
import Album from '../../public/fourth.png'
export function Footer() {
    return (
        <footer className="w-screen bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        
        <div className='flex gap-2'>
        <Image 
          className='rounded-md shadow-md shadow-black'
          width={60}
          height={60}
          src ={Album} 
          alt = "imagem do album StarBoy da banda the weeknd"
        />
          <div className='flex flex-col gap-1'>
            <strong>False alarm</strong>
            <span>The weekend</span>
          </div>
        </div>

        <div className='flex flex-col gap-1 items-center'>
          <div className='flex gap-2 items-center '>
            <Shuffle size={20} className='text-zinc-400'/>
            <SkipBack size={20} className='text-zinc-400'/>
            <button className='flex items-center justify-center pl-1 h-12 w-12 rounded-full bg-zinc-200 text-black hover:bg-zinc-400 transition duration-300'>
              <Play fill="bg-black" size={30}/>
            </button> 
            <SkipForward size={20} className='text-zinc-400' />
            <Repeat size={20} className='text-zinc-400' />
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-700 group'>
              <div className='h-1 rounded-full w-2 bg-zinc-300 group-hover:w-full duration-500 ease-in'></div>
            </div>
            <span className='text-zinc-400'>4:31</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
            <Mic2 size={20} />
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className="flex flex-row-reverse gap-2 items-center">
                <Volume size={20}/>
                <div className=" h-1 w-32 rounded-full bg-zinc-500">
                    <div className="h-1 w-16 rounded-full bg-zinc-200"></div>
                </div>
            </div>
            <Maximize size={20} />
        </div>
      </footer>
    )
}