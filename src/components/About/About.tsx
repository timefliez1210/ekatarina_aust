'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './About.module.css';

export default function About() {
    const t = useTranslations('about');

    const scrollToContact = () => {
        const element = document.getElementById('contact');
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

    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutInner}>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/ekatarina_aust_innenarchitektin.webp"
                            alt="Ekaterina Aust - Interior Designerin in Hildesheim"
                            width={400}
                            height={500}
                            sizes="(max-width: 768px) 100vw, 400px"
                            quality={90}
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.textContent}>
                        <h2 className={styles.title}>{t('title')}</h2>

                        <p className={styles.paragraph}>
                            {t('intro')}
                        </p>

                        <p className={styles.paragraph}>
                            {t('paragraph2')}
                        </p>

                        <div className={styles.howIWork}>
                            <h2 className={styles.howIWorkTitle}>{t('howIWork')}</h2>
                            <ul className={styles.workList}>
                                <li className={styles.workItem}>{t('workPoint1')}</li>
                                <li className={styles.workItem}>{t('workPoint2')}</li>
                                <li className={styles.workItem}>{t('workPoint3')}</li>
                            </ul>
                        </div>

                        <p className={styles.conclusion}>
                            {t('workConclusion')}
                        </p>

                        <p className={styles.paragraph}>
                            {t('uniqueApproach')}
                        </p>

                        <p className={styles.paragraph}>
                            {t('ctaPrefix')}
                            <button
                                type="button"
                                className={styles.contactLink}
                                onClick={scrollToContact}
                            >
                                {t('ctaLink')}
                            </button>
                            {t('ctaSuffix')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

