import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6 flex flex-col">
          
        <nav className='flex flex-col gap-3 w-full text-zinc-200'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 bg-red-500 rounded-full -mt-2'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full -mt-2'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full -mt-2'></div>
          </div>
          <a href="#" className='flex items-center gap-2 text-xs font-semibold hover:bg-zinc-900 transition duration-300 rounded-md w-full p-2'>
            <HomeIcon size={24}/> Home
          </a>
          <a href="#" className='flex items-center gap-2 text-xs font-semibold hover:bg-zinc-900 transition duration-300 rounded-md w-full p-2'>
            <Search size={24}/> Search
          </a>
          <a href="#" className='flex items-center gap-2 text-xs font-semibold hover:bg-zinc-900 transition duration-300 rounded-md w-full p-2'>
            <Library size={24}/> Your Library
          </a>

        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
          <a href="" className='text-zinc-300 hover:bg-zinc-900 transform duration-300 px-3 py-2  rounded-md '>playlist</a>
        </nav>
      </aside>
    )
}