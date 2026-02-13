import Image from 'next/image';
import styles from './ProjectContent.module.css';

interface ProjectContentProps {
    heading?: string;
    text: string[];
    imageSrc: string;
    imageAlt?: string;
    reversed?: boolean;
}

export default function ProjectContent({
    heading,
    text,
    imageSrc,
    imageAlt,
    reversed = false
}: ProjectContentProps) {
    return (
        <section className={`${styles.section} ${reversed ? styles.reversed : ''}`}>
            <div className={styles.sectionInner}>
                <div className={styles.textColumn}>
                    {heading && <h2 className={styles.heading}>{heading}</h2>}
                    {text.map((paragraph, index) => (
                        <p key={index} className={styles.text}>{paragraph}</p>
                    ))}
                </div>
                <div className={styles.imageColumn}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt || heading || 'Project detail'}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
