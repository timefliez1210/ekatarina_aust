import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        labelKey: 'shower',
        image: '/images/JiACiOGiE0Tu1cxKpYZWNQFKaYpfnpoGFS_79cpRGUG_IKBmDUcQ16aUdQrFYmZoS1hhnrauOQ441tdUfMXz-g.jpg'
    },
    {
        id: 2,
        labelKey: 'bedroom',
        image: '/images/JiACiOGiE0Tu1cxKpYZWNRA86JFzvr1gdHZJsTiDKQFOCsmISN1xB-CQsRMRuAzn_It-7kPJlhgYgkU-PTBl4w-scaled.jpg'
    },
    {
        id: 3,
        labelKey: 'office',
        image: '/images/JiACiOGiE0Tu1cxKpYZWNWhg3vaYq0CiFjG_F7703Ks4dAJkerJbiqciRQ_ovPKhnqiZt3Sg9Zc93ENbdliFYw.jpg'
    },
    {
        id: 4,
        labelKey: 'bedroom',
        image: '/images/JiACiOGiE0Tu1cxKpYZWNT-5x4E1NFaINzgxGe1mlaMhyeDHd0aEfWbzFLLK4SthMEA41PFcC2NXKzK2RuINsA-scaled.jpg'
    }
];

export default function Projects() {
    const t = useTranslations('projects');
    const locale = useLocale();

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.projectsInner}>
                <h2 className={styles.title}>{t('title')}</h2>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <article key={project.id} className={styles.projectCard}>
                            {project.labelKey === 'shower' ? (
                                <Link href={`/${locale}/bathroom-design`} className={styles.linkWrapper}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={t(project.labelKey)}
                                            fill
                                            className={styles.projectImage}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                    <p className={styles.projectLabel}>{t(project.labelKey)}</p>
                                </Link>
                            ) : (
                                <>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={t(project.labelKey)}
                                            fill
                                            className={styles.projectImage}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                    <p className={styles.projectLabel}>{t(project.labelKey)}</p>
                                </>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
