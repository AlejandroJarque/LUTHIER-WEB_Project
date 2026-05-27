import 'server-only'

const langDictionaries = {
    cat: () => import('@/_lang/data/cat.json').then((module) => module.default),
    en: () => import('@/_lang/data/en.json').then((module) => module.default),
    es: () => import('@/_lang/data/es.json').then((module) => module.default)
}

export const DEFAULT_LOCALE = 'cat' as Locale
export const SUPPORTED_LOCALES = Object.keys(langDictionaries) as Locale[]

export type Locale = keyof typeof langDictionaries

export const isSupported = (locale: string): locale is Locale => locale in langDictionaries

export function getLocale(locale: string): Locale {
    if (isSupported(locale)) {
        return locale
    }
    return DEFAULT_LOCALE
}

export const getLangDictionary = async (locale: Locale) => langDictionaries[locale]()

