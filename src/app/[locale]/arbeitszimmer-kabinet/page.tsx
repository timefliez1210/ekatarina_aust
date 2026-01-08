import { setRequestLocale } from 'next-intl/server';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import OfficeGallery from '@/components/OfficeGallery/OfficeGallery';
import OfficeRenders from '@/components/OfficeRenders/OfficeRenders';
import RelatedProjects from '@/components/RelatedProjects/RelatedProjects';
import Contact from '@/components/Contact/Contact';
import Divider from '@/components/Divider/Divider';

export default async function OfficePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = {
        ru: {
            title: 'КАБИНЕТ/ 33 М2',
            subtitle: 'КОНТРАСТ. АРХИТЕКТУРА. СТАТУС.',
            highlightText: 'Планировочное решение этой концепции разработано с максимальной пользой –',
            description: 'высота потолков позволила добавить консольный этаж. Внизу – деловой ритм, работа, переговоры. Наверху – тишина, книги и личное время. Стиль интерьера – классика с современными акцентами: темные детали, строгие линии и сдержанная палитра. Центральный элемент кабинета – винтовая лестница, из матового металла с «мятой» фактурой. Она объединяет два уровня и задает характер пространства, контрастируя с классической архитектурой интерьера.',
            galleryText: 'Планировочное решение этой концепции разработано с максимальной пользой – высота потолков позволила добавить консольный этаж. Внизу – деловой ритм, работа, переговоры. Наверху – тишина, книги и личное время. Стиль интерьера – классика с современными акцентами: темные детали, строгие линии и сдержанная палитра. Центральный элемент кабинета – винтовая лестница, из матового металла с «мятой» фактурой. Она объединяет два уровня и задает характер пространства, контрастируя с классической архитектурой интерьера.',
            creditFloor1: '/ 1 этаж: стол BONALDO, кресло рабочее BONALDO, ковер BONALDO, кресло BAXTER, столик ROCHE BOBOIS, бра ARTICOLO /',
            creditFloor2: '/ 2 этаж: кресло BEB ITALIA Almora, торшер MANDALAKI Hono Luceplan, свет VIBIA /',
            otherProjects: 'ДРУГИЕ ПРОЕКТЫ'
        },
        de: {
            title: 'ARBEITSZIMMER/ 33 M2',
            subtitle: 'KONTRAST. ARCHITEKTUR. STATUS.',
            highlightText: 'Die Raumlösung dieses Konzepts wurde mit maximalem Nutzen entwickelt –',
            description: 'die Deckenhöhe ermöglichte das Hinzufügen einer Konsoletage. Unten – Geschäftsrhythmus, Arbeit, Verhandlungen. Oben – Stille, Bücher und persönliche Zeit. Der Interieurstil ist Klassik mit modernen Akzenten: dunkle Details, strenge Linien und zurückhaltende Palette. Das zentrale Element des Büros ist eine Wendeltreppe aus mattem Metall mit "geknitterter" Textur. Sie verbindet zwei Ebenen und prägt den Charakter des Raumes, kontrastierend mit der klassischen Innenarchitektur.',
            galleryText: 'Die Raumlösung dieses Konzepts wurde mit maximalem Nutzen entwickelt – die Deckenhöhe ermöglichte das Hinzufügen einer Konsoletage. Unten – Geschäftsrhythmus, Arbeit, Verhandlungen. Oben – Stille, Bücher und persönliche Zeit. Der Interieurstil ist Klassik mit modernen Akzenten: dunkle Details, strenge Linien und zurückhaltende Palette. Das zentrale Element des Büros ist eine Wendeltreppe aus mattem Metall mit "geknitterter" Textur. Sie verbindet zwei Ebenen und prägt den Charakter des Raumes, kontrastierend mit der klassischen Innenarchitektur.',
            creditFloor1: '/ 1. Etage: Tisch BONALDO, Bürostuhl BONALDO, Teppich BONALDO, Sessel BAXTER, Beistelltisch ROCHE BOBOIS, Wandleuchte ARTICOLO /',
            creditFloor2: '/ 2. Etage: Sessel BEB ITALIA Almora, Stehlampe MANDALAKI Hono Luceplan, Licht VIBIA /',
            otherProjects: 'ANDERE PROJEKTE'
        }
    };

    const t = content[locale as 'ru' | 'de'] || content.ru;

    // Other projects (excluding office)
    const relatedProjects = [
        {
            id: 1,
            slug: 'duschbad-dush',
            image: '/images/Dusche-Design-Titel.jpg',
            label: locale === 'ru' ? 'Душевая' : 'Duschbad'
        },
        {
            id: 2,
            slug: 'schlafzimmer-spalnya',
            image: '/images/Schlafzimmer-Design-1-Link.jpg',
            label: locale === 'ru' ? 'Спальня' : 'Schlafzimmer'
        },
        {
            id: 4,
            slug: 'schlafzimmer-spalnya-2',
            image: '/images/Schlafzimmer-Design-2-link-titel.jpg',
            label: locale === 'ru' ? 'Спальня' : 'Schlafzimmer'
        }
    ];

    return (
        <>
            <ProjectHero
                title={t.title}
                subtitle={t.subtitle}
                highlightText={t.highlightText}
                description={t.description}
                mainImage="/images/Arbeitszimmer-Design-Titel.jpg"
            />

            <Divider />

            <OfficeGallery
                row1Images={[
                    "/images/Arbeitszimmer-Design-Section-1.jpg",
                    "/images/Arbeitszimmer-Design-Section-2.jpg"
                ]}
                row2Image="/images/Arbeitszimmer-Design-Section-3.jpg"
                text={t.galleryText}
                row3Images={{
                    left: "/images/Arbeitszimmer-Design-Section-5.jpg",
                    middleTop: "/images/Arbeitszimmer-Design-Section-6.jpg",
                    middleBottom: "/images/Arbeitszimmer-Design-Section-7.jpg",
                    right: "/images/Arbeitszimmer-Design-Section-8.jpg"
                }}
                row4Images={[
                    "/images/Arbeitszimmer-Design-Section-9.jpg",
                    "/images/Arbeitszimmer-Design-Section-10.jpg",
                    "/images/Arbeitszimmer-Design-Section-11.jpg"
                ]}
                row5Images={[
                    "/images/Arbeitszimmer-Design-Section-12.jpg",
                    "/images/Arbeitszimmer-Design-Section-13.jpg",
                    "/images/Arbeitszimmer-Design-Link-Section-4.jpg"
                ]}
            />

            <Divider />

            <OfficeRenders
                images={[
                    "/images/Arbeitszimmer-Design-3d-Render-1.jpg",
                    "/images/Arbeitszimmer-Design-3d-Render-2.jpg",
                    "/images/Arbeitszimmer-Design-3d-Render-3.jpg"
                ]}
                creditFloor1={t.creditFloor1}
                creditFloor2={t.creditFloor2}
            />

            <Divider />

            <RelatedProjects
                title={t.otherProjects}
                projects={relatedProjects}
                locale={locale}
            />

            <Contact />
        </>
    );
}
