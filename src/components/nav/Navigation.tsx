'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { JukkaLogo, BurgerIcon, CloseIcon } from "../svg/SVGIcons"

type NavItem = {
    id: string,
    label: string,
}

type MobileMenuProps = {
    navItems: NavItem[],

}

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
    }
}
export default function Navigation({ i18 }: any) {

    const navItems: NavItem[] = [
        { id: "aboutme", label: i18.aboutme },
        { id: "services", label: i18.services },
        { id: "contact", label: i18.contact },
    ];

    return <>
        <header className=" z-50 fixed w-full flex flex-row justify-between sm:justify-center items-center md:h-16 h-18 bg-linear-to-b from-jukka-dark/90 from-20% to-jukka-dark/10">
            <a href="/" className="flex flex-row ml-4 absolute left-4">
                <JukkaLogo className="flex w-12 h-12 hover:text-orange-400 hover:duration-500 duration-500" />
            </a>
            <nav className="w-full hidden sm:flex flex-col items-center justify-center">
                <ul className="flex flex-wrap list-none justify-center gap-4">
                    {navItems.map(({ id, label }) => (
                        <li className="px-7 hover:text-orange-400 hover:duration-500 duration-500" key={id}>
                            <button className="cursor-pointer" onClick={() => scrollToSection(id)}>{label}</button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="sm:hidden">
                <MobileMenu navItems={navItems} />
            </div>
        </header>

    </>
}

export function MobileMenu({ navItems }: MobileMenuProps) {

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
                {navItems.map(({ id, label }) => (
                    <li className={`px-7 py-10 hover:text-jukka-blood hover:duration-500 duration-500 text-5xl transition-all duration-600  ease-in-out ${open ? 'translate-x-0 delay-100' : 'translate-x-[200%] delay-600'}`} key={id}>
                        <button className="cursor-pointer" onClick={() => {
                            setOpen(!open)
                            scrollToSection(id)
                        }}>{label}</button>s
                    </li>
                ))}
            </ul>
            <button onClick={() => setOpen(!open)} className="cursor-pointer hover:duration-500 duration-500 hover:text-jukka-blood">
                <CloseIcon className="w-12 h-12 " />
            </button>
        </nav>

    </>
}
