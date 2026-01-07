import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './About.module.css';

export default function About() {
    const t = useTranslations('about');

    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutInner}>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/ekatarina_aust_innenarchitektin.webp"
                            alt="Ekaterina Aust"
                            width={400}
                            height={500}
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
                            <h3 className={styles.howIWorkTitle}>{t('howIWork')}</h3>
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
                            {t('cta')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
