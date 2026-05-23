import type { NextRequest } from "next/server";
import { NextResponse } from "next/server"


const supportedLocales = ['es', 'cat', 'en']
const defaultLocale = 'cat'

function getLocale(request: NextRequest) {
    const langs = request.headers.get('accept-language')
    langs?.split(",")
    return defaultLocale;
}


export default function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathHasLocale) {
        return
    }

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: '/((?!_next|img|.well-known).*)'
}