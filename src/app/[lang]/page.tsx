import { getLangDictionary, getLangOrNotFound } from '../../_lang/lang';

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const lang = getLangOrNotFound((await (params)).lang);
  const langdict = await getLangDictionary(lang);
  return (
    <Landing i18={langdict.landing} />
  );
}


function Landing({ i18 }: { i18: any }) {
  return (
    <div className="h-screen bg-cover bg-[center_00%]"
      style={{ backgroundImage: "url('/img/landingv.jpg')" }}>
      <div className="bg-gray-900/50 w-full h-full flex justify-center items-center flex-col text-white text-center w-1/3 h-full mx-auto">
        <div className=" flex justify-center items-center flex-col text-white text-center w-1/3 h-full mx-auto text-[6rem] font-bebas mt-14 leading-[1.01]">
          {i18.title}
        </div>
        {/* <a className="bg-black text-7xl font-bebas mb-14 p-3 pb-1 pt-2 rounded-lg border-2 border-white" href="#contact">{i18.contact}</a> */}
      </div>
    </div>
  )
}
