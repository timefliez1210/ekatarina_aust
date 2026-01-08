import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Contact from '@/components/Contact/Contact';
import styles from '@/components/Impressum/Impressum.module.css';

export default async function DatenschutzPage({
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
                        href="/ru/datenschutz"
                        className={`${styles.langLink} ${locale === 'ru' ? styles.active : ''}`}
                    >
                        RU
                    </Link>
                    <Link
                        href="/de/datenschutz"
                        className={`${styles.langLink} ${locale === 'de' ? styles.active : ''}`}
                    >
                        DE
                    </Link>
                </div>
            </header>

            {/* Datenschutz content */}
            <main className={styles.impressumContent}>
                <h1 className={styles.pageTitle}>DATENSCHUTZERKLÄRUNG</h1>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>1. Datenschutz auf einen Blick</p>
                    <div className={styles.sectionContent}>
                        <p><strong>Allgemeine Hinweise</strong></p>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>2. Datenerfassung auf dieser Website</p>
                    <div className={styles.sectionContent}>
                        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                        </p>
                        <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                        <p>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>
                        <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>3. Hosting</p>
                    <div className={styles.sectionContent}>
                        <p>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter. Die Verwendung erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>4. Allgemeine Hinweise und Pflichtinformationen</p>
                    <div className={styles.sectionContent}>
                        <p><strong>Datenschutz</strong></p>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p>
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>
                        <p><strong>Hinweis zur verantwortlichen Stelle</strong></p>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im Impressum angegeben. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>
                        <p><strong>Speicherdauer</strong></p>
                        <p>
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
                        </p>
                        <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
                        <p>
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>
                        <p><strong>Recht auf Datenübertragbarkeit</strong></p>
                        <p>
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                        </p>
                        <p><strong>Auskunft, Löschung und Berichtigung</strong></p>
                        <p>
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                        </p>
                        <p><strong>Recht auf Einschränkung der Verarbeitung</strong></p>
                        <p>
                            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>5. Datenerfassung auf dieser Website</p>
                    <div className={styles.sectionContent}>
                        <p><strong>Kontaktformular</strong></p>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                        </p>
                        <p>
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>
                        <p><strong>Anfrage per E-Mail, Telefon oder Telefax</strong></p>
                        <p>
                            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionTitle}>6. Plugins und Tools</p>
                    <div className={styles.sectionContent}>
                        <p><strong>Google Fonts (lokales Hosting)</strong></p>
                        <p>
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer with contact */}
            <Contact />
        </div>
    );
}
