const MAX_ACCEPT_LANGUAGE_LENGTH = 256

export type AcceptLanguage = {
    locale: string,
    q: number,
    idx: number
}

export function parseAccepetedLanguage(request: Request): AcceptLanguage[] {
    const acceptLangs = request.headers.get('accept-language')
    if (!acceptLangs?.trim()) {
        return []
    }

    if (acceptLangs.trim().length >= MAX_ACCEPT_LANGUAGE_LENGTH) {
        return []
    }

    return acceptLangs.split(",").map((str, idx) => {
        const [tag, ...params] = str.split(";");

        if (!tag) {
            return null
        }

        let quality = 1
        for (const p of params) {
            const param = p.trim()
            if (!param.startsWith("q=")) {
                continue
            }

            const qvalue = Number(param.slice(2))
            if (Number.isFinite(qvalue) && qvalue >= 0 && qvalue <= 1) {
                quality = qvalue
            }
        }

        return {
            locale: tag,
            q: quality,
            idx: idx
        }

    }).filter(Boolean).sort((al0, al1) => {
        // Sorting from big to small
        if (al1!.q !== al0!.q) {
            return al1!.q - al0!.q;
        }
        return al0!.idx - al1!.idx
    }) as AcceptLanguage[]
}