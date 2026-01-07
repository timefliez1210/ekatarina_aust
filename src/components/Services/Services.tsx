'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Services.module.css';

type TabKey = 'consultation' | 'project' | 'estimate' | 'complete' | 'supervision';

export default function Services() {
    const t = useTranslations('services');
    const [activeTab, setActiveTab] = useState<TabKey>('consultation');

    const tabs: { key: TabKey; translationKey: string }[] = [
        { key: 'consultation', translationKey: 'tabs.consultation' },
        { key: 'project', translationKey: 'tabs.project' },
        { key: 'estimate', translationKey: 'tabs.estimate' },
        { key: 'complete', translationKey: 'tabs.complete' },
        { key: 'supervision', translationKey: 'tabs.supervision' }
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.servicesInner}>
                <h2 className={styles.title}>{t('title')}</h2>

                <p className={styles.intro}>{t('intro')}</p>

                <nav className={styles.tabNav}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {t(tab.translationKey)}
                        </button>
                    ))}
                </nav>

                <div className={styles.tabContent}>
                    {/* Consultation Tab */}
                    <div className={`${styles.tabPanel} ${activeTab === 'consultation' ? styles.active : ''}`}>
                        <p className={styles.question}>{t('consultation.question')}</p>
                        <p className={styles.duration}>{t('consultation.duration')}</p>
                        <ul className={styles.pointList}>
                            <li className={styles.point}>{t('consultation.point1')}</li>
                            <li className={styles.point}>{t('consultation.point2')}</li>
                            <li className={styles.point}>{t('consultation.point3')}</li>
                        </ul>
                        <p className={styles.durationInfo}>
                            <span>{t('consultation.durationLabel')}</span> {t('consultation.durationValue')}
                        </p>
                    </div>

                    {/* Project Tab */}
                    <div className={`${styles.tabPanel} ${activeTab === 'project' ? styles.active : ''}`}>
                        <h3 className={styles.duration}>{t('project.title')}</h3>
                        <p className={styles.serviceDescription}>{t('project.description')}</p>
                    </div>

                    {/* Estimate Tab */}
                    <div className={`${styles.tabPanel} ${activeTab === 'estimate' ? styles.active : ''}`}>
                        <h3 className={styles.duration}>{t('estimate.title')}</h3>
                        <p className={styles.serviceDescription}>{t('estimate.description')}</p>
                    </div>

                    {/* Complete Tab */}
                    <div className={`${styles.tabPanel} ${activeTab === 'complete' ? styles.active : ''}`}>
                        <h3 className={styles.duration}>{t('complete.title')}</h3>
                        <p className={styles.serviceDescription}>{t('complete.description')}</p>
                    </div>

                    {/* Supervision Tab */}
                    <div className={`${styles.tabPanel} ${activeTab === 'supervision' ? styles.active : ''}`}>
                        <h3 className={styles.duration}>{t('supervision.title')}</h3>
                        <p className={styles.serviceDescription}>{t('supervision.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
