'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

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
