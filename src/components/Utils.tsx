import Image from 'next/image'

export type IconProps = {
    src: string,
    width: number,
    height: number
}
export type ContactIconProps = {
    label: string,
    icon: IconProps
    url?: string
}

function TitleText({ title }: { title: any }) {
    return (
        <div className="w-full h-fit flex flex-row justify-center items-center py-4 text-shadow-lg/30">
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
            <h2 className="text-5xl"><span className="whitespace-nowrap">{title}</span></h2>
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
        </div>

    )
}

function TitleLogo() {
    return (
        <div className="w-full h-fit flex flex-row justify-center items-center py-4">
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
            <Image src="/img/logo_nbg_white.png" alt="logo" width={50} height={50} className="" />
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
        </div>

    )
}

function ContactIcon({ label, icon, url }: ContactIconProps) {

    return url
        ?
        <a className="hover:cursor-pointer hover:text-orange-400">
            <span className="flex flex-col items-center p-2">
                <Image src={icon.src} alt={label} width={icon.width} height={icon.height} />
                <span className="text-center text-xl py-2 ">{label}</span>
            </span>
        </a>
        :
        <span className="flex flex-col items-center p-2 hover:text-orange-400">
            <Image src={icon.src} alt={label} width={icon.width} height={icon.height} />
            <span className="text-center text-xl py-2 ">{label}</span>
        </span>
}



export { TitleText, TitleLogo, ContactIcon }