'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
    const t = useTranslations('contact');
    const locale = useLocale();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className={styles.contact}>
            {/* Hidden form for Netlify form detection (pre-render) */}
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
            </form>

            <div className={styles.contactInner}>
                {/* Form Section */}
                <div className={styles.formSection}>
                    <h2 className={styles.title}>{t('title')}</h2>

                    <form
                        className={styles.form}
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        {/* Hidden field for Netlify */}
                        <input type="hidden" name="form-name" value="contact" />
                        {/* Honeypot field for spam protection */}
                        <p hidden>
                            <label>
                                Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} />
                            </label>
                        </p>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName" className={styles.label}>
                                    {t('firstName')}
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={styles.input}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName" className={styles.label}>
                                    {t('lastName')}
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={styles.input}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                {t('email')} *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>
                                {t('phone')} *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            {t('submit')}
                        </button>
                    </form>
                </div>

                {/* Info Section */}
                <div className={styles.infoSection}>
                    <p className={styles.ctaText}>{t('cta')}</p>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>{t('phoneLabel')}</span>
                            <div className={styles.phoneNumbers}>
                                <span className={styles.infoValue}>{t('phoneDE')}</span>
                                <span className={styles.infoValue}>{t('phoneRU')}</span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>{t('emailLabel')}</span>
                            <a href={`mailto:${t('emailAddress')}`} className={styles.infoValue}>
                                {t('emailAddress')}
                            </a>
                        </div>

                        <Link href={`/${locale}/impressum`} className={styles.impressumLink}>
                            Impressum
                        </Link>
                        <Link href={`/${locale}/datenschutz`} className={styles.impressumLink}>
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
