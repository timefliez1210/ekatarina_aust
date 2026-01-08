import { setRequestLocale } from 'next-intl/server';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import MosaikGallery from '@/components/MosaikGallery/MosaikGallery';
import ProjectRenders from '@/components/ProjectRenders/ProjectRenders';
import RelatedProjects from '@/components/RelatedProjects/RelatedProjects';
import Contact from '@/components/Contact/Contact';
import Divider from '@/components/Divider/Divider';

export default async function BedroomMosaikPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = {
        ru: {
            title: 'СПАЛЬНЯ/ 42 М2',
            subtitle: 'ГИБКОСТЬ, СПОКОЙСТВИЕ И МЯГКОЕ ЗОНИРОВАНИЕ',
            highlightText: 'Эта спальня создавалась совместно с',
            highlightLinkText: 'душевой',
            description: 'для девочки-подростка с пожеланием, чтобы интерьер оставался актуальным на протяжении многих лет. Концепция не привязана к возрасту – она спокойна, уравновешенна и не перегружена визуально. Это особенно важно для пространств, где хочется отдыхать, учиться и проводить время с близкими.',
            text1: 'Основная задача – создать функциональную планировку без монтажа новых строительных перегородок. Этот запрос был решен благодаря зонированию декоративной ширмой, которая мягко отделяет кровать и создает ощущение уединения, не нарушая целостности интерьера. Такой прием позволил сохранить гибкость пространства – его можно трансформировать со временем, простом меняя расположение основных зон и мебели.',
            italicText1: 'Интерьер для подростка, в котором она чувствует себя взрослой, но не теряет ощущение уюта и безопасности.',
            rendersText: '/ комод OKHA, ковер ROCHE BOBOIS, свет VISKONTEA by Achille and Piero Castiglioni, свет FLOS, бра ASTRO, стул MERIDIANI Teresina, обои BELARTE STUDIO, галтель и плинтус ORAC Decor /',
            otherProjects: 'ДРУГИЕ ПРОЕКТЫ'
        },
        de: {
            title: 'SCHLAFZIMMER/ 42 M2',
            subtitle: 'FLEXIBILITÄT, RUHE UND SANFTE ZONIERUNG',
            highlightText: 'Dieses Schlafzimmer wurde zusammen mit dem',
            highlightLinkText: 'Duschbad',
            description: 'für ein Teenager-Mädchen mit dem Wunsch gestaltet, dass das Interieur über viele Jahre aktuell bleibt. Das Konzept ist nicht an ein Alter gebunden – es ist ruhig, ausgewogen und visuell nicht überladen. Dies ist besonders wichtig für Räume, in denen man sich entspannen, lernen und Zeit mit seinen Lieben verbringen möchte.',
            text1: 'Die Hauptaufgabe bestand darin, eine funktionale Raumaufteilung ohne den Einbau neuer Trennwände zu schaffen. Diese Anforderung wurde durch die Zonierung mit einem dekorativen Paravent gelöst, der das Bett sanft abtrennt und ein Gefühl der Privatsphäre schafft, ohne die Integrität des Interieurs zu stören. Dieser Ansatz ermöglichte es, die Flexibilität des Raumes zu erhalten – er kann im Laufe der Zeit transformiert werden, indem einfach die Anordnung der Hauptzonen und Möbel geändert wird.',
            italicText1: 'Ein Interieur für einen Teenager, in dem sie sich erwachsen fühlt, aber nicht das Gefühl von Gemütlichkeit und Sicherheit verliert.',
            rendersText: '/ Kommode OKHA, Teppich ROCHE BOBOIS, Licht VISKONTEA by Achille and Piero Castiglioni, Licht FLOS, Wandleuchte ASTRO, Stuhl MERIDIANI Teresina, Tapeten BELARTE STUDIO, Zierleisten ORAC Decor /',
            otherProjects: 'ANDERE PROJEKTE'
        }
    };

    const t = content[locale as 'ru' | 'de'] || content.ru;

    // Other projects (excluding bedroom-mosaik)
    const relatedProjects = [
        {
            id: 1,
            slug: 'duschbad-dush',
            image: '/images/Dusche-Design-Titel.jpg',
            label: locale === 'ru' ? 'Душевая' : 'Duschbad'
        },
        {
            id: 3,
            slug: 'office-design',
            image: '/images/JiACiOGiE0Tu1cxKpYZWNWhg3vaYq0CiFjG_F7703Ks4dAJkerJbiqciRQ_ovPKhnqiZt3Sg9Zc93ENbdliFYw.jpg',
            label: locale === 'ru' ? 'Кабинет' : 'Büro'
        },
        {
            id: 4,
            slug: 'living-room-design',
            image: '/images/JiACiOGiE0Tu1cxKpYZWNT-5x4E1NFaINzgxGe1mlaMhyeDHd0aEfWbzFLLK4SthMEA41PFcC2NXKzK2RuINsA-scaled.jpg',
            label: locale === 'ru' ? 'Гостиная' : 'Wohnzimmer'
        }
    ];

    return (
        <>
            <ProjectHero
                title={t.title}
                subtitle={t.subtitle}
                highlightText={t.highlightText}
                highlightLink={`/${locale}/duschbad-dush`}
                highlightLinkText={t.highlightLinkText}
                description={t.description}
                mainImage="/images/Schlafzimmer-Design-1-titel.jpg"
            />

            <Divider />

            <MosaikGallery
                topImage="/images/Schlafzimmer-Design-1-section-1.jpg"
                row2Images={[
                    "/images/Schlafzimmer-Design-1-section-2.jpg",
                    "/images/Schlafzimmer-Design-1-section-3.jpg"
                ]}
                text1={t.text1}
                italicText1={t.italicText1}
                row3Images={{
                    left: "/images/Schlafzimmer-Design-1-section-4.jpg",
                    middleTop: "/images/Schlafzimmer-Design-1-section-5.jpg",
                    middleBottom: "/images/Schlafzimmer-Design-1-section-6.jpg",
                    right: "/images/Schlafzimmer-Design-1-section-7.jpg"
                }}
                row4Images={{
                    left: "/images/Schlafzimmer-Design-1-section-8.jpg",
                    middleTop: "/images/Schlafzimmer-Design-1-section-9.jpg",
                    middleBottom: "/images/Schlafzimmer-Design-1-Titel-section-10.jpg",
                    right: "/images/Schlafzimmer-Design-1-section-11.jpg"
                }}
            />

            <Divider />

            <ProjectRenders
                images={[
                    "/images/Schlafzimmer-Design-3d-render-links.jpg",
                    "/images/Schlafzimmer-Design-3d-render-rechts.jpg"
                ]}
                text={t.rendersText}
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
