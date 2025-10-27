import { Contact } from "lucide-react";
import Image from "next/image";
import { FcSettings } from "react-icons/fc";
import GlassWraper from "./GlassWraper";

export default function NavBar() {
    return (
        <div className="flex text-white justify-between w-full p-4 mx-auto   absolute z-20">
            <div className="left flex gap-2 items-center justify-center">
                <GlassWraper className="row p-[4px] px-2 flex items-center">
                    <Image src="/icon.png" alt="Logo" width={40} height={40} />
                    <p className=" font-semibold text-md">RaiDiGi</p>
                </GlassWraper>
            </div>
        </div>
    )
}
