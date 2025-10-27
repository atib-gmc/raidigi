import { Contact } from "lucide-react";
import { FcSettings } from "react-icons/fc";

export default function NavBar() {
    return (
        <div className="flex text-white justify-between w-full p-4 mx-auto  absolute z-20">
            <div className="left flex gap-2 items-center justify-center">
                <div className="avatar w-10 h-10 grid place-items-center rounded-full outline-4  bg-gray-300">
                    <Contact />
                </div>
                <div className="row">
                    <p className="ml-[6px] font-semibold text-md">Hellen</p>
                    <span className="bg-white/40 p-2 rounded-xl text-xs py-[2px] backdrop-blur-xl">Member</span>
                </div>
            </div>
            <div className="avatar w-10 h-10 rounded-full  grid place-items-center bg-white/40 backdrop-blur-xl">
                <FcSettings size={35} />
            </div>
        </div>
    )
}
