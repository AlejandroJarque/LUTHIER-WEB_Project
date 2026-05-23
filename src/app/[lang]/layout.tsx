import Header from '@/components/Header'
import { getLangDictionary, getLangOrNotFound } from "@/_lang/lang";


export async function generateStaticParams() {
  return [{ lang: 'cat' }, { lang: 'en' }, { lang: 'es' }]
}

export default async function LocaleLayout(props: LayoutProps<'/[lang]'>) {
  const { children, params } = props;
  const lang = getLangOrNotFound((await (params)).lang);
  const langdict = await getLangDictionary(lang);

  return <>
    <Header i18={langdict.headers} />
    <main>{children}</main>
  </>
}
