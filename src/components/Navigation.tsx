'use client'

import Image from "next/image"
import Link from "next/link"

export default function Navigation({ i18 }: { i18: any }) {
    return <>
        <header className="fixed w-full flex flex-row items-center h-14 bg-linear-to-b from-jukka-dark/90 from-20% to-jukka-dark/10">
            <a href="/" className="flex flex-row">
                <Image src="/img/logo_white_noletters.png" width={40} height={40} alt="F***" className="ml-6" />
            </a>
            <nav className="w-full flex flex-col items-center justify-center">
                <ul className="flex flex-wrap list-none justify-center gap-4">
                    <li className="px-7 hover:text-jukka-red hover:duration-500 duration-500"><Link href="#">{i18.aboutme}</Link></li>
                    <li className="px-7 hover:text-jukka-red hover:duration-500 duration-500"><Link href="#">{i18.services}</Link></li>
                    <li className="px-7 hover:text-jukka-red hover:duration-500 duration-500"><Link href="#">{i18.contact}</Link></li>
                </ul>
            </nav>
        </header>

    </>
}