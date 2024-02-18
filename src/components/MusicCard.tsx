import { Play } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface Props {
    source : StaticImageData
    band : string
}

export function MusicCard ({ source, band } : Props) {
    return (
        <div className='bg-white/5 w-full rounded-md overflow-hidden hover:bg-white/10 transition duration-200 flex flex-row items-center justify-between pr-4 group' >
            <div className='flex items-center gap-3 font-bold text-lg'>
                <Image 
                    width={112}
                    height={112}
                    src ={source} 
                    alt = "imagem do album StarBoy da banda the weeknd"
                />
               {band}
            </div>

            <div className='w-12 h-12 pl-1 text-black bg-green-600/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer hover:bg-green-700 transition duration-200'>
            <Play fill='bg-black'/> 
            </div>
        </div>
)
}