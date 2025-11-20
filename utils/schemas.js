export const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://monaiclinic.com.br/#organization',
    name: 'Monai Clinic',
    alternateName: 'Monai Clínica de Estética',
    description: 'Clínica especializada em harmonização facial, botox, preenchimentos, bioestimuladores e tratamentos estéticos avançados.',
    url: 'https://monaiclinic.com.br/',
    logo: 'https://monaiclinic.com.br/img/og-image.png',
    image: 'https://monaiclinic.com.br/img/og-image.png',

    // Localização (adicione o endereço real quando tiver)
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brasília',
        addressRegion: 'DF',
        addressCountry: 'BR'
        // streetAddress: 'Seu endereço completo aqui',
        // postalCode: '70000-000'
    },

    // Área de atuação
    areaServed: {
        '@type': 'City',
        name: 'Brasília'
    },

    // Especialidades médicas
    medicalSpecialty: [
        'Harmonização Facial',
        'Estética Avançada',
        'Dermatologia Estética'
    ],

    // Serviços oferecidos
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tratamentos Estéticos',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Botox',
                    description: 'Tratamento para suavizar linhas de expressão e prevenir rugas'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Rinomodelação',
                    description: 'Modelação nasal com ácido hialurônico sem cirurgia'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Preenchimento Labial',
                    description: 'Aumento de volume e definição dos lábios'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Bioestimulador de Colágeno',
                    description: 'Estimulação natural de colágeno para rejuvenescimento'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'PDRN',
                    description: 'Tratamento regenerador que estimula renovação celular'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Ultrassom Microfocado',
                    description: 'Lifting sem cortes, estimula colágeno nas camadas profundas'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Laser PISOM',
                    description: 'Rejuvenescimento facial e clareamento de manchas'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Microagulhamento',
                    description: 'Tratamento de manchas, cicatrizes e rejuvenescimento'
                }
            }
        ]
    },

    // Profissionais
    employee: [
        {
            '@type': 'Physician',
            name: 'Dra. Natacha Passos',
            jobTitle: 'Cirurgiã-Dentista',
            description: 'Especialista em Harmonização Facial Avançada'
        },
        {
            '@type': 'MedicalSpecialty',
            name: 'Dra. Wllyenne Alarcão',
            jobTitle: 'Enfermeira',
            description: 'Pós-graduada em Estética Avançada'
        }
    ],

    // Avaliações (ajuste conforme necessário)
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1'
    },

    // Horário de funcionamento (ajuste conforme necessário)
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
        }
    ],

    // Redes sociais (adicione quando tiver)
    sameAs: [
        // 'https://www.instagram.com/monaiclinic',
        // 'https://www.facebook.com/monaiclinic',
        // 'https://wa.me/5561999999999'
    ]
}

// Schema para serviço específico
export function createServiceSchema(serviceName, description) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: serviceName,
        description: description,
        provider: {
            '@type': 'MedicalBusiness',
            name: 'Monai Clinic',
            url: 'https://monaiclinic.com.br/'
        }
    }
}

// Schema para breadcrumb
export function createBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }
}

// Schema para FAQs (se você tiver uma seção de perguntas frequentes)
export function createFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}
