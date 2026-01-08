import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        labelKey: 'shower',
        slug: 'duschbad-dush',
        image: '/images/Dusche-Design-Titel.jpg'
    },
    {
        id: 2,
        labelKey: 'bedroom',
        slug: 'schlafzimmer-spalnya',
        image: '/images/Schlafzimmer-Design-1-Link.jpg'
    },
    {
        id: 3,
        labelKey: 'office',
        slug: null,
        image: '/images/JiACiOGiE0Tu1cxKpYZWNWhg3vaYq0CiFjG_F7703Ks4dAJkerJbiqciRQ_ovPKhnqiZt3Sg9Zc93ENbdliFYw.jpg'
    },
    {
        id: 4,
        labelKey: 'bedroom',
        slug: null,
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
                            {project.slug ? (
                                <Link href={`/${locale}/${project.slug}`} className={styles.linkWrapper}>
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
