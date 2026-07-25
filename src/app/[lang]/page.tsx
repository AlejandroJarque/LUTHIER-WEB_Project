import { getLangDictionary, getLocale, getAsText } from '../../_lang/lang';
import Image from 'next/image';
import { TitleText, TitleLogo} from '@/components/utils';
import Carousel from '@/components/Carousel';

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
      <FinalFooter i18={langdict.footer} />
    </>
  );
}


function Landing({ i18 }: { i18: any }) {
  return (
    <div className="h-screen bg-cover bg-[center_00%]"
      style={{ backgroundImage: "url('/img/workshop.jpg')" }}>
      <div className="bg-gray-900/50 w-full h-full pt-20 flex flex-col lg:flex-row gap-10 justify-center items-center text-white text-center">
        <div className="md:w-1/3 w-2/3 md:h-full h-auto flex flex-col justify-center items-center 
        text-white text-center lg:text-8xl md:text-[4rem] text-5xl font-bebas leading-[1.01] ">
          {i18.title}
        </div>
        <div className="md:w-1/3 w-2/3 md:h-full h-auto flex justify-center items-center m-6">
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
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mt-4 pt-6">
        <Image className="border-transparent border-0 border rounded w-full max-w-xs sm:max-w-sm md:max-w-[480px] h-auto shrink-0 shadow-md shadow-orange-400/40" src="/img/landingv.jpg" width={800} height={1000} alt="About Me" />
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left min-w-0 w-full">
            <p className="break-words text-base sm:text-lg md:text-2xl">{getAsText(i18.description)}</p>
          </div>
      </div>
    </div>
  )
}

function Services({ i18 }: { i18: any }) {
  return (
    <div id="services" className="flex flex-col justify-center items-center px-6 sm:px-10 md:mx-20 pt-10">
      <TitleText title={i18.title} />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 mt-4 pt-6 w-full max-w-2xl">
          <p className="whitespace-pre-line text-center md:text-left md:pr-40 text-base sm:text-lg md:text-2xl">{i18.description1}</p>
          <p className="whitespace-pre-line text-orange-400 text-center md:text-left md:pl-40 text-base sm:text-lg md:text-2xl">{i18.description2}</p>
      </div>
      <div className="flex flex-row justify-center m-2 ml-8 mt-12 mb-4 max-w-[70%]">
        <Carousel source={[
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

function Contact({ i18 }: { i18: any }) {
  return (
    <div id="contact" className="flex flex-col justify-center items-center px-6 sm:px-10 md:mx-20 pt-10">
      <TitleText title={i18.title} />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 mt-8">
        <div className="flex flex-col gap-4 items-center md:items-start md:pr-20 text-lg sm:text-xl md:text-2xl">
          <a href="https://www.instagram.com/jukkaluthier?igsh=eWw4MGxmNmNkdDdr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Image className="pl-1" src="/img/instagram.png" alt="instagram" width={95} height={95} />
            <span>@jukkaluthier</span>
          </a>
          <a className="flex items-center gap-4">
            <Image className="pl-0 ml-1" src="/img/whatsapp.png" alt="whatsapp" width={80} height={80} />
            <span>6*********</span>
          </a>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start md:pl-20 text-lg sm:text-xl md:text-2xl">
          <p className="text-orange-400">{i18.description2}</p>
          {i18.links2.map((link: any) => (
            <a key={link.label} href="https://www.melomaniaks.com/ca/inici/" target="_blank" rel="noopener noreferrer" className="mx-auto">
              <Image src="/img/MKS.png" alt="Melomaniak's" width={80} height={80} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function FinalFooter({ i18 }: { i18: any }) {
  return (
    <div className="flex flex-col justify-center items-center px-6 sm:px-10 md:mx-20 pt-10 pb-20">
      <TitleLogo />
    </div>
  )
}