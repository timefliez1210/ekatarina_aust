import { setRequestLocale } from 'next-intl/server';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';
import ProjectRenders from '@/components/ProjectRenders/ProjectRenders';
import RelatedProjects from '@/components/RelatedProjects/RelatedProjects';
import Contact from '@/components/Contact/Contact';
import Divider from '@/components/Divider/Divider';

export default async function BathroomDesignPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const content = {
        ru: {
            title: 'ДУШЕВАЯ/ 8 М2',
            subtitle: 'СМЕЛАЯ ЭСТЕТИКА И ФУНКЦИОНАЛЬНОСТЬ В ОДНОМ ПРОСТРАНСТВЕ',
            highlightText: 'Концепция интерьера душевой была разработана совместно со',
            highlightLinkText: 'спальней',
            description: ', отражая индивидуальность и яркий характер будущей хозяйки-подростка. Главной задачей было создать выразительное и эмоциональное пространство, передающее энергию переходного возраста, но при этом сохранить полную функциональность помещения.',
            galleryText: 'Ключевая идея – четыре арки, четыре функции: вход, раковина, душевая зона, полу изолированная зона туалета и стиральной машины. Все зоны объединены архитектурным решением и глубоким винным оттенком стен, создающим насыщенный фон. Контрастом выступает природный камень с многослойной текстурой, который используется на полу и в отделке мебели.',
            galleryItalicText: 'Концепция этой душевой – пример того, как с помощью формы, цвета, материалов и текстур можно создать пространство, которое вдохновляет и отражает личность своего владельца.',
            rendersText: '/ сантехника CEA design, свет A-N-D light, галтель ORAC Decor /',
            otherProjects: 'ДРУГИЕ ПРОЕКТЫ'
        },
        de: {
            title: 'DUSCHBAD/ 8 M2',
            subtitle: 'KÜHNE ÄSTHETIK UND FUNKTIONALITÄT IN EINEM RAUM',
            highlightText: 'Das Interieur-Konzept des Duschbads wurde gemeinsam mit dem',
            highlightLinkText: 'Schlafzimmer',
            description: ' entwickelt, und spiegelt die Individualität und den starken Charakter der zukünftigen Teenager-Besitzerin wider. Die Hauptaufgabe war die Schaffung eines ausdrucksstarken und emotionalen Raumes, der die Energie des Übergangsalters vermittelt, dabei aber die volle Funktionalität des Raumes bewahrt.',
            galleryText: 'Die Schlüsselidee – vier Bögen, vier Funktionen: Eingang, Waschbecken, Duschbereich, halb isolierter Toiletten- und Waschmaschinenbereich. Alle Bereiche sind durch eine architektonische Lösung und einen tiefen Weinton der Wände vereint, der einen satten Hintergrund schafft. Als Kontrast dient Naturstein mit mehrschichtiger Textur, der auf dem Boden und in der Möbelverkleidung verwendet wird.',
            galleryItalicText: 'Das Konzept dieses Duschbads – ein Beispiel dafür, wie man mit Hilfe von Form, Farbe, Materialien und Texturen einen Raum schaffen kann, der inspiriert und die Persönlichkeit seines Besitzers widerspiegelt.',
            rendersText: '/ Sanitär CEA design, Licht A-N-D light, Zierleisten ORAC Decor /',
            otherProjects: 'ANDERE PROJEKTE'
        }
    };

    const t = content[locale as 'ru' | 'de'] || content.ru;

    // Other projects (excluding bathroom)
    const relatedProjects = [
        {
            id: 2,
            slug: 'schlafzimmer-spalnya',
            image: '/images/Schlafzimmer-Design-1-Link.jpg',
            label: locale === 'ru' ? 'Спальня' : 'Schlafzimmer'
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
                highlightLink={`/${locale}/schlafzimmer-spalnya`}
                highlightLinkText={t.highlightLinkText}
                description={t.description}
                mainImage="/images/Dusche-Design-Titel.jpg"
            />

            <Divider />

            <ProjectGallery
                topImages={[
                    "/images/Dusche-Design-1.jpg",
                    "/images/Dusche-Design-2.jpg",
                    "/images/Dusche-Design-3.jpg"
                ]}
                text={t.galleryText}
                italicText={t.galleryItalicText}
                bottomImages={{
                    left: "/images/Dusche-Design-4.jpg",
                    middleTop: "/images/Dusche-Design-small-top.jpg",
                    middleBottom: "/images/Dusche-Design-Small-down.jpg",
                    right: "/images/Dusche-Design-5.jpg"
                }}
            />

            <Divider />

            <ProjectRenders
                images={[
                    "/images/Dusche-3d-front.jpg",
                    "/images/Dusche-3d-back.jpg"
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
