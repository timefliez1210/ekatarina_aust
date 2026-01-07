import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header/Header';
import '../globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-primary'
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const messages = await getMessages();
    const meta = messages.meta as { title: string; description: string };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            languages: {
                ru: '/ru',
                de: '/de'
            }
        }
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
        <html lang={locale} className={inter.variable}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>{children}</main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
