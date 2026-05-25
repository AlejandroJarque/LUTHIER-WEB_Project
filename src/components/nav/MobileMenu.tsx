'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { BurgerIcon, CloseIcon } from "../svg/SVGIcons";

export default function MobileMenu({ i18 }: any) {

    const [open, setOpen] = useState(false);

    return <>
        <button onClick={() => setOpen(!open)}
            className="p-4 cursor-pointer hover:duration-500 duration-500 hover:text-jukka-blood"><BurgerIcon className="w-8 h-8" /></button>

        <nav className={`fixed top-0 right-0 w-full h-full bg-jukka-dark/100 flex flex-col gap-10 items-center justify-around
             transition-all duration-600  ease-in-out ${open ? 'z-50  translate-y-0 visible opacity-98' : 'z-0 -translate-y-full invisible opacity-30 delay-400 '}`}>
            <Link href="#" onClick={() => setOpen(!open)}>
                <Image src="/img/logo_white_noletters.png" width={40} height={38} alt="F***" className="" />
            </Link>
            <ul className="flex flex-col justify-center items-center gap-4">
                <li className={`px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl transition-all duration-600  ease-in-out ${open ? 'translate-x-0 delay-100' : 'translate-x-[200%] delay-600'}`}><Link href="#aboutme" onClick={() => setOpen(!open)}>{i18.aboutme}</Link></li>
                <li className={`px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl transition-all duration-600  ease-in-out ${open ? 'translate-x-0 delay-300' : 'translate-x-[200%] delay-300'}`}><Link href="#services" onClick={() => setOpen(!open)}>{i18.services}</Link></li>
                <li className={`px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl transition-all duration-600  ease-in-out ${open ? 'translate-x-0 delay-600' : 'translate-x-[200%] delay-100'}`}><Link href="#contact" onClick={() => setOpen(!open)}>{i18.contact}</Link></li>
            </ul>
            <button onClick={() => setOpen(!open)} className="cursor-pointer hover:duration-500 duration-500 hover:text-jukka-blood">
                <CloseIcon className="w-12 h-12 " />
            </button>
        </nav>

    </>
}