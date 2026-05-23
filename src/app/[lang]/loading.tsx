import Image from 'next/image'

export default function Loading() {
    return (
        <div className="bg-jukka-dark w-full h-screen flex justify-center items-centerfont-bebas">
            <div className="flex justify-center items-center flex-col">
                <Image src="/img/logo_white_noletters.png" width={334} height={309} alt="F***" className="animate-pulse" />
            </div>
        </div>
    );
}
