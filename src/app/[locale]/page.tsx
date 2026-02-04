import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Contact from '@/components/Contact/Contact';
import Divider from '@/components/Divider/Divider';

export default async function HomePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    // JSON-LD Structured Data for LocalBusiness
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://ekaterina-aust.de',
        name: 'Ekaterina Aust - Interior Design',
        alternateName: 'Logica Interior Design',
        description: locale === 'de'
            ? 'Professionelle Interior Designerin in Hildesheim. Individuelle Raumgestaltung, Schlafzimmer- und Badezimmer-Design.'
            : 'Профессиональный дизайнер интерьера. Индивидуальные проекты спален, ванных комнат, кабинетов.',
        url: 'https://ekaterina-aust.de',
        telephone: '+49 160 2332135',
        email: 'aust.ekaterina@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hildesheim',
            addressCountry: 'DE'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 52.1547,
            longitude: 9.9518
        },
        areaServed: ['Hildesheim', 'Hannover', 'Braunschweig', 'Niedersachsen', 'Deutschland', 'Russland'],
        priceRange: '$$',
        image: 'https://ekaterina-aust.de/images/logica_innenarchitektur.jpg',
        sameAs: [],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
        },
        founder: {
            '@type': 'Person',
            name: 'Ekaterina Aust',
            jobTitle: locale === 'de' ? 'Interior Designerin' : 'Дизайнер интерьера'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <Divider />
            <About />
            <Divider />
            <Projects />
            <Divider />
            <Services />
            <Contact />
        </>
    );
}

