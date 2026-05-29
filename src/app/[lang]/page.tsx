import { getLangDictionary, getLocale, getAsText } from '../../_lang/lang';
import Image from 'next/image';
import { TitleText } from '@/components/utils';


export default async function Home({ params }: PageProps<'/[lang]'>) {
  const lang = getLocale((await (params)).lang);
  const langdict = await getLangDictionary(lang);
  return (
    <>
      <Landing i18={langdict.landing} />
      <Aboutme i18={langdict.aboutme} />
      <Services i18={langdict.services} />
    </>
  );
}


function Landing({ i18 }: { i18: any }) {
  return (
    <div className="h-screen bg-cover bg-[center_00%]"
      style={{ backgroundImage: "url('/img/workshop.jpg')" }}>
      <div className="bg-gray-900/50 w-full h-full pt-20 flex flex-col lg:flex-row gap-10 justify-center items-center text-white text-center">
        <div className="md:w-1/3 w-2/3 md:h-full h-auto flex flex-col justify-center items-center 
        text-white text-center lg:text-8xl md:text-[4rem]  text-5xl font-bebas leading-[1.01] ">
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

function Aboutme({ i18 } : { i18: any }) {
  return (
    <div className="mx-20">
      <TitleText title={i18.title} />
      <div className="flex flex-row m-2 ml-8 mt-4">
        <Image className="border-transparent border rounded w-full h-full md:max-w-[480px]" src="/img/landingv.jpg" width={800} height={1000} alt="About Me" />
        <div className="flex flex-col justify-center items-start m-4 md:m-8 text-left">
          <p>{getAsText(i18.description)}</p>
        </div>
      </div>
    </div>
  )
}

function Services({ i18 }: { i18: any }) {
  return (
    <div className="mx-20">
      <TitleText title={i18.title} />
      <div className="flex flex-row justify-center m-2 ml-8 mt-4">
        <p className="whitespace-pre-line pr-40">{i18.description1}</p>
        <p className= "whitespace-pre-line text-orange-400 pl-40">{i18.description2}</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}