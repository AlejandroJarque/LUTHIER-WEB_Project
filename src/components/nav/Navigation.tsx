import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

// bg-linear-to-b from-jukka-dark/90 from-20% to-jukka-dark/10
export default function Navigation({ i18 }: any) {
    return <>
        <header className="fixed w-full flex flex-row justify-between sm:justify-center items-center md:h-14 h-18 bg-linear-to-b from-jukka-dark/90 from-20% to-jukka-dark/10">
            <a href="/" className="flex flex-row">
                <Image src="/img/logo_white_noletters.png" width={40} height={40} alt="F***" className="ml-6" />
            </a>
            <nav className="w-full hidden sm:flex flex-col items-center justify-center">
                <ul className="flex flex-wrap list-none justify-center gap-4">
                    <li className="px-7 hover:text-jukka-blood hover:duration-500 duration-500"><Link href="#">{i18.aboutme}</Link></li>
                    <li className="px-7 hover:text-jukka-blood hover:duration-500 duration-500"><Link href="#">{i18.services}</Link></li>
                    <li className="px-7 hover:text-jukka-blood hover:duration-500 duration-500"><Link href="#">{i18.contact}</Link></li>
                </ul>
            </nav>
            <div className="sm:hidden">
                <MobileMenu i18={i18} />
            </div>
        </header>

    </>
}
