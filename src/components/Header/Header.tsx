'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderProps {
    showLogo?: boolean;
}

export default function Header({ showLogo = false }: HeaderProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect if we're on a subpage (not the homepage)
    const isSubpage = pathname !== `/${locale}` && pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchLocale = (newLocale: string) => {
        const currentPath = pathname.replace(`/${locale}`, '');
        router.push(`/${newLocale}${currentPath}`);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerInner}>
                {(showLogo || isSubpage) && (
                    <Link href={`/${locale}`} className={styles.logo}>
                        <Image
                            src="/images/logica_innenarchitektur.jpg"
                            alt="logica"
                            width={40}
                            height={40}
                            quality={100}
                            className={styles.logoImage}
                        />
                    </Link>
                )}

                <div className={styles.langSwitcher}>
                    <button
                        className={`${styles.langButton} ${locale === 'ru' ? styles.active : ''}`}
                        onClick={() => switchLocale('ru')}
                        aria-label="Русский"
                    >
                        RU
                    </button>
                    <button
                        className={`${styles.langButton} ${locale === 'de' ? styles.active : ''}`}
                        onClick={() => switchLocale('de')}
                        aria-label="Deutsch"
                    >
                        DE
                    </button>
                </div>
            </div>
        </header>
    );
}
