import { useHead } from '@unhead/vue'

export function useSEO({
    title = 'Monai Clinic - Estética Avançada e Harmonização Facial em Brasília',
    description = 'Clínica especializada em harmonização facial, botox, preenchimentos, bioestimuladores e tratamentos estéticos avançados. Dra. Natacha Passos e Dra. Wllyenne Alarcão.',
    keywords = '',
    image = 'https://monaiclinic.com.br/img/og-image.png',
    url = 'https://monaiclinic.com.br/',
    type = 'website',
    schema = null,
    noindex = false
} = {}) {

    const fullTitle = title.includes('Monai Clinic')
        ? title
        : `${title} | Monai Clinic`

    const baseKeywords = 'harmonização facial, botox, preenchimento labial, estética facial, clínica estética, Brasília, rinomodelação, bioestimulador colágeno, estética avançada'
    const fullKeywords = keywords ? `${keywords}, ${baseKeywords}` : baseKeywords

    const headConfig = {
        title: fullTitle,
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: fullKeywords },
            { name: 'author', content: 'Monai Clinic - Dra. Natacha Passos e Dra. Wllyenne Alarcão' },
            { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'language', content: 'pt-BR' },
            { name: 'geo.region', content: 'BR-DF' },
            { name: 'geo.placename', content: 'Brasília' },


            { property: 'og:type', content: type },
            { property: 'og:site_name', content: 'Monai Clinic' },
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:image:alt', content: 'Monai Clinic - Estética Avançada' },
            { property: 'og:url', content: url },
            { property: 'og:locale', content: 'pt_BR' },


            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: fullTitle },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
            { name: 'twitter:image:alt', content: 'Monai Clinic - Estética Avançada' },


            { name: 'theme-color', content: '#8B7355' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
        ],
        link: [
            { rel: 'canonical', href: url }
        ]
    }

    if (schema) {
        headConfig.script = [
            {
                type: 'application/ld+json',
                children: JSON.stringify(schema)
            }
        ]
    }

    useHead(headConfig)
}
