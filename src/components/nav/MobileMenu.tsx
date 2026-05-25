'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
export default function MobileMenu({ i18 }: any) {

    const [open, setOpen] = useState(false);

    return <>
        <button onClick={() => setOpen(!open)}
            className="p-4">OPEN</button>
        {open && (
            <nav className="fixed top-0 right-0 z-50 w-full h-full bg-jukka-dark/100 flex flex-col gap-10 items-center justify-around duration-500 transition-transform duration-300">
                <Link href="#" onClick={() => setOpen(!open)}>
                    <Image src="/img/logo_white_noletters.png" width={40} height={38} alt="F***" className="" />
                </Link>
                <ul className="flex flex-col justify-center items-center gap-4">
                    <li className="px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl"><Link href="#aboutme" onClick={() => setOpen(!open)}>{i18.aboutme}</Link></li>
                    <li className="px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl"><Link href="#services" onClick={() => setOpen(!open)}>{i18.services}</Link></li>
                    <li className="px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl"><Link href="#contact" onClick={() => setOpen(!open)}>{i18.contact}</Link></li>
                </ul>
                <button onClick={() => setOpen(!open)}>CLOSE</button>
            </nav>
        )}
    </>
}