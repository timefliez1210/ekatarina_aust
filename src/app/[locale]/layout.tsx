import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Montserrat } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header/Header';
import '../globals.css';

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-heading',
    weight: ['300', '400', '500', '600']
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const messages = await getMessages();
    const meta = messages.meta as {
        title: string;
        description: string;
        ogTitle?: string;
        ogDescription?: string;
    };

    const baseUrl = 'https://ekaterina-aust.de';

    return {
        title: meta.title,
        description: meta.description,
        keywords: locale === 'de'
            ? 'Innenarchitektur, Hildesheim, Raumdesign, Schlafzimmer Design, Badezimmer Design, Ekaterina Aust, Interior Design, Wohnraumgestaltung'
            : 'дизайн интерьера, interior design, спальня дизайн, ванная комната, Екатерина Ауст, Германия',
        authors: [{ name: 'Ekaterina Aust' }],
        creator: 'Ekaterina Aust',
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'ru': `${baseUrl}/ru`,
                'de': `${baseUrl}/de`,
            },
        },
        openGraph: {
            type: 'website',
            locale: locale === 'de' ? 'de_DE' : 'ru_RU',
            url: `${baseUrl}/${locale}`,
            title: meta.ogTitle || meta.title,
            description: meta.ogDescription || meta.description,
            siteName: 'Ekaterina Aust - Innenarchitektur',
            images: [
                {
                    url: `${baseUrl}/images/logica_innenarchitektur.jpg`,
                    width: 800,
                    height: 800,
                    alt: locale === 'de'
                        ? 'Ekaterina Aust Interior Designerin Hildesheim'
                        : 'Екатерина Ауст дизайнер интерьера',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.ogTitle || meta.title,
            description: meta.ogDescription || meta.description,
            images: [`${baseUrl}/images/logica_innenarchitektur.jpg`],
        },
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
                { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            ],
            apple: [
                { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
            ],
        },
        manifest: '/manifest.json',
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'E. Aust Design',
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} className={montserrat.variable}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>{children}</main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
