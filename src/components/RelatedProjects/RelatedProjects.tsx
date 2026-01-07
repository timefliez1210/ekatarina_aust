import Image from 'next/image';
import Link from 'next/link';
import styles from './RelatedProjects.module.css';

interface Project {
    id: number;
    slug: string;
    image: string;
    label: string;
}

interface RelatedProjectsProps {
    title: string;
    projects: Project[];
    locale: string;
}

export default function RelatedProjects({ title, projects, locale }: RelatedProjectsProps) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <article key={project.id} className={styles.projectCard}>
                            <Link href={`/${locale}/${project.slug}`} className={styles.linkWrapper}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.label}
                                        fill
                                        className={styles.projectImage}
                                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                                <p className={styles.projectLabel}>{project.label}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
