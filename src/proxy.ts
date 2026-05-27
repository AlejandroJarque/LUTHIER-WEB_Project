import type { NextRequest } from "next/server";
import { NextResponse } from "next/server"
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, Locale, isSupported } from "./_lang/lang";
import { parseAccepetedLanguage } from './util/RequestUtils'

function getLocale(request: NextRequest): Locale {
    const acceptedLanguage = parseAccepetedLanguage(request);
    for (const language of acceptedLanguage) {
        if (isSupported(language.locale)) {
            return language.locale
        }
        const lang = language.locale.split('-')[0]
        if (isSupported(lang)) {
            return lang as Locale
        }
    }
    return DEFAULT_LOCALE
}


export default function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathHasLocale = SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathHasLocale) {
        return
    }

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: '/((?!_next|img|.well-known|favicon.ico).*)'
}