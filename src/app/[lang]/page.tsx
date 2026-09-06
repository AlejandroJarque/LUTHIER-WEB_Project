import { getLangDictionary, getLocale, getAsText } from '../../_lang/lang';
import Image from 'next/image';
import { TitleText, TitleLogo, ContactIcon, ContactIconProps } from '@/components/Utils';
import { FluidCarousel } from '@/components/Carousel';

const iconImages: { [key: string]: string } = {
  instagram: '/img/instagram.png',
  whatsapp: '/img/whatsapp.png',
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const lang = getLocale((await (params)).lang);
  const langdict = await getLangDictionary(lang);
  return (
    <>
      <Landing i18={langdict.landing} />
      <Aboutme i18={langdict.aboutme} />
      <Services i18={langdict.services} />
      <Contact i18={langdict.contact} />
      <TheEnd />
    </>
  );
}


function Landing({ i18 }: { i18: any }) {
  return (
    <div className="h-screen bg-cover bg-[center_00%]"
      style={{ backgroundImage: "url('/img/workshop.jpg')" }}>
      <div className="bg-gray-900/50 w-full h-full pt-20 flex flex-col-reverse xl:flex-row gap-10 justify-center items-center text-white text-center">
        <div className="md:w-1/3 w-2/3 md:h-full h-auto flex flex-col justify-center items-center 
        text-white text-center lg:text-8xl md:text-[4rem] text-5xl font-bebas leading-[1.01] text-shadow-lg/30">
          {i18.title}
        </div>
        <div className="xl:w-1/3 w-2/3 md:h-full h-auto flex justify-center items-center md:m-6">
          <Image src="/img/logo_nbg_white.png" width={1339} height={1236} alt="F***" className="w-[90%] lg:w-[70%] md:w-[85%] sm:w-[50%]" loading="eager" />
        </div>
        {/* <a className="bg-black text-7xl font-bebas mb-14 p-3 pb-1 pt-2 rounded-lg border-2 border-white" href="#contact">{i18.contact}</a> */}
      </div>
    </div>
  )
}

function Aboutme({ i18 }: { i18: any }) {
  return (
    <div id="aboutme" className="px-6 sm:px-10 md:mx-20 pt-10">
      <TitleText title={i18.title} />
      <div className="flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-16  mt-4 px-8 md:px-16 py-4">
        <Image className="border-transparent border-0 border rounded xl:max-w-[480px] h-auto shrink-0 shadow-md shadow-orange-400/40" src="/img/landingv.jpg" width={800} height={1000} alt="About Me" />
        <div className="flex flex-col justify-center items-center text-justify xl:text-left w-full p-4">
          <p className="break-words text-xl md:text-3xl">{getAsText(i18.description)}</p>
        </div>
      </div>
    </div>
  )
}

function Services({ i18 }: { i18: any }) {

  return (
    <div id="services" className="flex flex-col justify-center items-center px-6 sm:px-10 md:mx-20 pt-10">
      <TitleText title={i18.title} />
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 m-2 py-2 w-full text-3xl">
        <ul className="px-8 py-4 space-y-2 text-center">
          {i18.serviceItems.map((item: string, idx: number) => (
            <li key={idx} className="mx-auto">{item}</li>
          ))}
        </ul>
        <ul className="px-8 space-y-2 mx-4 text-center">
          {i18.serviceGuarantees.map((item: string, idx: number) => (
            <li key={idx} className="mx-auto text-orange-400">{item}</li>
          ))}
        </ul>
      </div>
      <div className="h-[650px] w-full mt-6">
        <FluidCarousel source={[
          '/img/mywork/00001.webp',
          '/img/mywork/00002.webp',
          '/img/mywork/00003.webp',
          '/img/mywork/00004.webp',
          '/img/mywork/00005.webp',
          '/img/mywork/00007.webp',
        ]} />
      </div>

    </div>
  )
}

const WHATSAPP_ICON = {
  src: "/img/whatsapp.png",
  width: 50,
  height: 50
}

const INSTAGRAM_ICON = {
  src: "/img/instagram.png",
  width: 50,
  height: 50
}

const MELONAMNIAKS_ICON = {
  src: "/img/melomaniaks250x50_white.png",
  width: 250,
  height: 50
}

function Contact({ i18 }: { i18: any }) {
  return (
    <div id="contact" className="px-6 sm:px-10 md:mx-20 py-10">
      <TitleText title={i18.title} />
      <div className="w-full py-4 flex gap-8 items-center justify-center">
        <ContactIcon label="647126453" icon={WHATSAPP_ICON} />
        <ContactIcon url="https://www.instagram.com/jukkaluthier" label="@jukkaluthier" icon={INSTAGRAM_ICON} />
        <ContactIcon url="https://www.melomaniaks.com" label="Escola i Serveis Musicals" icon={MELONAMNIAKS_ICON} />
      </div>
    </div>
  )
}


function TheEnd() {
  return (<>
    <div className="px-6 sm:px-10 md:mx-20 pt-10">
      <TitleLogo />
    </div>
  </>)
}