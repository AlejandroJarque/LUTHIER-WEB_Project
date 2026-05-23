import { notFound } from 'next/navigation'
import 'server-only'

const dictionaries = {
    cat: () => import('@/_lang/data/cat.json').then((module) => module.default),
    en: () => import('@/_lang/data/en.json').then((module) => module.default),
    es: () => import('@/_lang/data/es.json').then((module) => module.default)
}

export type Locale = keyof typeof dictionaries

const isSupported = (locale: string): locale is Locale => locale in dictionaries

export function getLangOrNotFound(locale: string): Locale {
    if (!isSupported(locale)) {
        notFound()
    }
    return locale
}

export const getLangDictionary = async (locale: Locale) => dictionaries[locale]()
