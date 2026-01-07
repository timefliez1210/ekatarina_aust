'use client';

import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('hero');
    const nav = useTranslations('nav');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { key: 'about', id: 'about' },
        { key: 'projects', id: 'projects' },
        { key: 'services', id: 'services' },
        { key: 'contacts', id: 'contact' }
    ];

    return (
        <section className={styles.hero}>
            <div className={styles.logoContainer}>
                <div className={styles.logoCircle}>
                    <span className={styles.logoText}>logica</span>
                </div>
                <p className={styles.tagline}>{t('tagline')}</p>
            </div>

            <nav className={styles.heroNav}>
                <ul className={styles.heroNavList}>
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <button
                                className={styles.heroNavLink}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {nav(item.key)}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}
