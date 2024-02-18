
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Album from '../../public/fourth.png'
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { MusicCard } from '@/components/MusicCard';
import { FeatAlbumCard } from '@/components/FeatAlbumCard';
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <Sidebar />
        <main className="flex-1 p-6 flex-col">
          <div className='flex items-center gap-3'>
            <button className='w-8 h-8 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-zinc-950 transition duration-300'>
              <ChevronLeft />
            </button>

            <button className='w-8 h-8 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-zinc-950 transition duration-300'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-6'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-6 mt-8'>
            
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />
            <MusicCard 
              band="The Weeknd" 
              source={Album} 
            />

          </div>
        <h1 className='text-2xl font-bold my-4'>Made for Lucas Felipe</h1>
        <div className='grid grid-cols-7 gap-4'>
          <FeatAlbumCard 
            artists={['Drake', 'Ariana Grande', 'Michael Jackson']} 
            source={Album} 
            title='Daily mix 1#' 
          />
          <FeatAlbumCard 
            artists={['Drake', 'Ariana Grande', 'Michael Jackson']} 
            source={Album} 
            title='Daily mix 1#' 
          />
          <FeatAlbumCard 
            artists={['Drake', 'Ariana Grande', 'Michael Jackson']} 
            source={Album} 
            title='Daily mix 1#' 
          />
          <FeatAlbumCard 
            artists={['Drake', 'Ariana Grande', 'Michael Jackson']} 
            source={Album} 
            title='Daily mix 1#' 
          />
          <FeatAlbumCard 
            artists={['Drake', 'Ariana Grande', 'Michael Jackson']} 
            source={Album} 
            title='Daily mix 1#' 
          />
        </div>
        </main>
      </div>
      <Footer />
    </div>
    
  );
}
