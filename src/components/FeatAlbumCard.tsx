import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
    source : StaticImageData
    title : string
    artists : string []
}

export function FeatAlbumCard ({source, artists, title } : Props) {
    return (
        <a href='#' className='flex flex-col gap-2 rounded-md p-4 bg-zinc-800 group hover:bg-white/10 transition duration-200'>
            <Image 
              className='w-full rounded'
              width={112}
              height={112}
              src ={source} 
              alt = "imagem do album StarBoy da banda the weeknd"
            />
            <div className='flex flex-row items-center relative overflow-hidden '>
              <div className='flex justify-between flex-col'>
                <strong className='text-lg font-bold '>{title}</strong>
                <span className='text-zinc-400'>
                    {
                      artists.length > 0 && artists.map((element : string, index : number) => {
                        if(index < artists.length - 1)return `${element}, `
                        else return `${element}.` 
                      })
                    }
                </span> 
              </div>
              <div className="absolute bottom-0 right-0 opacity-0 translate-y-12 group-hover:translate-y-0 transition duration-200 group-hover:opacity-100">
                <div className='border-none w-12 h-12 rounded-full bg-green-600 flex top-0 right-0 items-center justify-center hover:bg-green-700 transition duration-200 text-black'>
                    <Play fill="bg-black" />
                </div>
              </div>
            </div>
          </a>
    )
}