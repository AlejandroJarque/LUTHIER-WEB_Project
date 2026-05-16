import Image from 'next/image';

function Landing() {
    return (
        <div className="bg-black h-screen">
            <Image src="/img/logo_white_noletters.png" alt="" width={300} height={300}></Image>
            <div>Luthier en Gava</div>
            <a href="#contact">Contacto</a>
        </div>
    )
}

export default Landing;
