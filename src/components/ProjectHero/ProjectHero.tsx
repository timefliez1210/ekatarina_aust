import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectHero.module.css';

interface ProjectHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    highlightText?: string;
    highlightLink?: string;
    highlightLinkText?: string;
    mainImage: string;
    imageAlt?: string;
    thumbnails?: string[];
}

export default function ProjectHero({
    title,
    subtitle,
    description,
    highlightText,
    highlightLink,
    highlightLinkText,
    mainImage,
    imageAlt,
    thumbnails = []
}: ProjectHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.imageContainer}>
                    <Image
                        src={mainImage}
                        alt={imageAlt || title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.textContent}>
                    <div className={styles.topContent}>
                        <h1 className={styles.title}>{title}</h1>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>

                    <p className={styles.description}>
                        {highlightText && (
                            <>
                                <span className={styles.highlight}>{highlightText}</span>
                                {highlightLink && highlightLinkText && (
                                    <>
                                        {' '}
                                        <Link href={highlightLink} className={styles.inlineLink}>
                                            {highlightLinkText}
                                        </Link>
                                    </>
                                )}
                            </>
                        )}{' '}
                        {description}
                    </p>
                </div>
            </div>

            {thumbnails.length > 0 && (
                <div className={styles.thumbnails}>
                    {thumbnails.map((thumb, index) => (
                        <div key={index} className={styles.thumbnail}>
                            <Image
                                src={thumb}
                                alt={`${title} detail ${index + 1}`}
                                fill
                                sizes="20vw"
                                className={styles.thumbnailImage}
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
