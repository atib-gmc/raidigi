import { Contact, HomeIcon, SearchIcon, Settings } from 'lucide-react'

export default function BottomNav() {
    return (
        <div className="bg-white pt-[2px] flex  fixed -bottom-4 w-full h-20 rounded-t-4xl shadow-sm  pb-20 justify-center gap-4">
            <div className="flex-1 text-center max-w-11 h-11 outline-6 outline-white text-white -translate-y-1.5 rounded-full p-2 grid place-items-center bg-red-400">
                <HomeIcon />
            </div>
            <div className="flex-1 text-center max-w-11 h-11  rounded-full p-2 grid place-items-center text-gray-500">
                <SearchIcon />
            </div>
            <div className="flex-1 text-center max-w-11 h-11 text-gray-500 rounded-full p-2 grid place-items-center ">
                <Contact />
            </div>

            <div className="flex-1 text-center max-w-11 h-11 text-gray-500 rounded-full p-2 grid place-items-center ">
                <Settings />
            </div>
        </div>
    )
}
