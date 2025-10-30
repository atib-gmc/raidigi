import { Contact } from "lucide-react";
import Image from "next/image";
import { FcSettings } from "react-icons/fc";
import GlassWraper from "./GlassWraper";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex text-white justify-between w-full p-4 mx-auto   absolute z-20">
            <Link href={"/"} className="left flex gap-2 items-center hover:scale-105 justify-center">
                <GlassWraper className="row p-[4px] px-[10px] flex items-center">
                    <Image src="/icon.png" alt="Logo" width={40} height={40} />
                    <p className=" font-semibold text-md">RaiDiGi</p>
                </GlassWraper>
            </Link>
        </div>
    )
}
