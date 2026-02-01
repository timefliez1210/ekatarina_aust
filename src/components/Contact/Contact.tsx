"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setPrivacyConsent(false);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>{t("title")}</h2>

          {submitStatus === "success" && (
            <div className={styles.successMessage}>
              {locale === "ru"
                ? "Спасибо! Мы свяжемся с вами в ближайшее время."
                : "Vielen Dank! Wir werden uns bald bei Ihnen melden."}
            </div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>
              {locale === "ru"
                ? "Произошла ошибка. Пожалуйста, попробуйте снова."
                : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."}
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Honeypot field for spam protection */}
            <p hidden>
              <label>
                Don&apos;t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  {t("firstName")}
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
                  {t("lastName")}
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

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t("email")} *
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
                  {t("phone")} *
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
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="privacyConsent"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                required
                className={styles.checkbox}
              />
              <label htmlFor="privacyConsent" className={styles.checkboxLabel}>
                {t("privacyConsentPrefix")}{" "}
                <Link
                  href={`/${locale}/datenschutz`}
                  className={styles.privacyLink}
                >
                  {t("privacyConsentLink")}
                </Link>{" "}
                {t("privacyConsentSuffix")}
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              {t("submit")}
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className={styles.infoSection}>
          <p className={styles.ctaText}>{t("cta")}</p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t("phoneLabel")}</span>
              <div className={styles.phoneNumbers}>
                <span className={styles.infoValue}>{t("phoneDE")}</span>
                <span className={styles.infoValue}>{t("phoneRU")}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t("emailLabel")}</span>
              <a
                href={`mailto:${t("emailAddress")}`}
                className={styles.infoValue}
              >
                {t("emailAddress")}
              </a>
            </div>

            <Link
              href={`/${locale}/impressum`}
              className={styles.impressumLink}
            >
              Impressum
            </Link>
            <Link
              href={`/${locale}/datenschutz`}
              className={styles.impressumLink}
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
