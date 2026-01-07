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

    return (
        <>
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
