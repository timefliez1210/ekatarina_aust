import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <a href="#" className={styles.impressumLink}>
                    {t('impressum')}
                </a>
            </div>
        </footer>
    );
}
