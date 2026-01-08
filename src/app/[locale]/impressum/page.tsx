import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '@/components/Contact/Contact';
import styles from '@/components/Impressum/Impressum.module.css';

export default async function ImpressumPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className={styles.impressumPage}>
            {/* Simple header with language switcher */}
            <header className={styles.simpleHeader}>
                <div className={styles.languageSwitcher}>
                    <Link
                        href="/ru/impressum"
                        className={`${styles.langLink} ${locale === 'ru' ? styles.active : ''}`}
                    >
                        RU
                    </Link>
                    <Link
                        href="/de/impressum"
                        className={`${styles.langLink} ${locale === 'de' ? styles.active : ''}`}
                    >
                        DE
                    </Link>
                </div>
            </header>

            {/* Impressum content */}
            <main className={styles.impressumContent}>
                <h1 className={styles.pageTitle}>IMPRESSUM</h1>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Firmenname:</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Ansprechpartner:</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Anschrift:</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Umsatzsteuer Identifikationsnummer</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Telefon:</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.fieldLabel}>Internet:</p>
                    <p className={styles.fieldValue}></p>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Haftungsausschluss (Disclaimer)</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Haftung für Inhalte</p>
                    <div className={styles.sectionContent}>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Haftung für Links</p>
                    <div className={styles.sectionContent}>
                        <p>
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Urheberrecht</p>
                    <div className={styles.sectionContent}>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO:</p>
                    <div className={styles.sectionContent}>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className={styles.link}>https://ec.europa.eu/consumers/odr/</a> finden. Darüber hinaus nimmt unser Betrieb an einem Verbraucherstreitigkeit-verfahren nicht teil.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>Bitte beachten Sie auch unsere Datenschutzerklärung.</p>
                </div>
            </main>

            {/* Footer with contact */}
            <Contact />
        </div>
    );
}
