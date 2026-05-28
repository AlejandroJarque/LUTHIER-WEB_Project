import Navigation from '@/components/nav/Navigation'
import { getLangDictionary, getLocale } from "@/_lang/lang";


export async function generateStaticParams() {
  return [{ lang: 'cat' }, { lang: 'en' }, { lang: 'es' }]
}

export default async function LocaleLayout(props: LayoutProps<'/[lang]'>) {
  const { children, params } = props;
  const lang = getLocale((await (params)).lang);
  const langdict = await getLangDictionary(lang);

  return <>
    <Navigation i18={langdict.navigation} />
    <div>{children}</div>
  </>
}
