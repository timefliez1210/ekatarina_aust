import { setRequestLocale } from 'next-intl/server';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import Bedroom2Gallery from '@/components/Bedroom2Gallery/Bedroom2Gallery';
import ProjectRenders from '@/components/ProjectRenders/ProjectRenders';
import RelatedProjects from '@/components/RelatedProjects/RelatedProjects';
import Contact from '@/components/Contact/Contact';
import Divider from '@/components/Divider/Divider';

export default async function Bedroom2Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = {
        ru: {
            title: 'СПАЛЬНЯ/ 20 М2',
            subtitle: 'ТЕМНЫЙ ИНТЕРЬЕР С КАМЕРНОЙ АТМОСФЕРОЙ',
            highlightText: 'Уединенный, чувственный и защищенный от суеты –',
            description: 'таким стал интерьер спальни для молодой пары, которая искала не просто место для сна. Для усиления ощущения приватности и тишины концепция разработана в темных оттенках цвета хаки.',
            text1: 'В этом пространстве нет ярких акцентов и больших контрастов – удобное лаундж кресло для чтения книг перед сном, полупрозрачное тканевое изголовье в латунных рамах, мягкий рассеянный свет, проникающий сквозь светлые шторы. Все это создает ощущение камерности, желания чувствовать и говорить шепотом.',
            text2: 'Сочетание тактильных материалов, сложной палитры и приглушенного освещения делает каждое пробуждение и засыпание обволакивающим и спокойным.',
            rendersText: '/ кресло POLIFORM, торшер VIBIA, столики POLIFORM, свет VOLKERHAUG Fleur, дверь UNION /',
            otherProjects: 'ДРУГИЕ ПРОЕКТЫ'
        },
        de: {
            title: 'SCHLAFZIMMER/ 20 M2',
            subtitle: 'DUNKLES INTERIEUR MIT INTIMER ATMOSPHÄRE',
            highlightText: 'Abgeschieden, sinnlich und vor dem Trubel geschützt –',
            description: 'so wurde das Schlafzimmer-Interieur für ein junges Paar gestaltet, das nicht nur einen Schlafplatz suchte. Um das Gefühl von Privatsphäre und Stille zu verstärken, wurde das Konzept in dunklen Khaki-Tönen entwickelt.',
            text1: 'In diesem Raum gibt es keine hellen Akzente und großen Kontraste – ein bequemer Lounge-Sessel zum Lesen vor dem Schlafengehen, ein halbtransparentes Stoff-Kopfteil in Messingrahmen, weiches diffuses Licht, das durch helle Vorhänge dringt. All dies schafft ein Gefühl der Intimität, den Wunsch zu fühlen und zu flüstern.',
            text2: 'Die Kombination aus taktilen Materialien, einer komplexen Palette und gedämpfter Beleuchtung macht jedes Aufwachen und Einschlafen umhüllend und ruhig.',
            rendersText: '/ Sessel POLIFORM, Stehlampe VIBIA, Beistelltische POLIFORM, Licht VOLKERHAUG Fleur, Tür UNION /',
            otherProjects: 'ANDERE PROJEKTE'
        }
    };

    const t = content[locale as 'ru' | 'de'] || content.ru;

    // Other projects (excluding bedroom2)
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
            id: 3,
            slug: 'arbeitszimmer-kabinet',
            image: '/images/Arbeitszimmer-Design-Link-Section-4.jpg',
            label: locale === 'ru' ? 'Кабинет' : 'Arbeitszimmer'
        }
    ];

    return (
        <>
            <ProjectHero
                title={t.title}
                subtitle={t.subtitle}
                highlightText={t.highlightText}
                description={t.description}
                mainImage="/images/Schlafzimmer-Design-2-link-titel.jpg"
                imageAlt={locale === 'de' ? 'Dunkles Schlafzimmer Design - Ekaterina Aust Raumgestaltung Hildesheim' : 'Темный дизайн спальни - Екатерина Ауст'}
            />

            <Divider />

            <Bedroom2Gallery
                landscapeImage="/images/Schlafzimmer-Design-2-section-1.jpg"
                portraitImages={[
                    "/images/Schlafzimmer-Design-2-section-2.jpg",
                    "/images/Schlafzimmer-Design-2-section-3.jpg"
                ]}
                text1={t.text1}
                text2={t.text2}
                row3Images={{
                    left: "/images/Schlafzimmer-Design-2-section-4.jpg",
                    middleTop: "/images/Schlafzimmer-Design-2-section-5.webp",
                    middleBottom: "/images/Schlafzimmer-Design-2-section-6.jpg",
                    right: "/images/Schlafzimmer-Design-2-section-7.jpg"
                }}
            />

            <Divider />

            <ProjectRenders
                images={[
                    "/images/schlafzimmer-grau-links.jpg",
                    "/images/schlafzimmer-grau-rechts.jpg"
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
