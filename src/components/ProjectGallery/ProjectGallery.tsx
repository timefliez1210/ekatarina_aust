import Image from 'next/image';
import styles from './ProjectGallery.module.css';

interface ProjectGalleryProps {
    topImages: string[];       // 3 images
    text: string;
    italicText?: string;
    bottomImages: {
        left: string;
        middleTop: string;
        middleBottom: string;
        right: string;
    };
    credits?: string;
}

export default function ProjectGallery({
    topImages,
    text,
    italicText,
    bottomImages,
    credits
}: ProjectGalleryProps) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                {/* 3 equal images */}
                <div className={styles.threeImageRow}>
                    {topImages.map((img, index) => (
                        <div key={index} className={styles.tallImage}>
                            <Image
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    ))}
                </div>

                {/* Text block */}
                <div className={styles.textBlock}>
                    <p className={styles.text}>{text}</p>
                    {italicText && <p className={`${styles.text} ${styles.italicText}`}>{italicText}</p>}
                </div>

                {/* 2 large + 2 small grid */}
                <div className={styles.fourImageGrid}>
                    <div className={styles.largeImage}>
                        <Image src={bottomImages.left} alt="Gallery image" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>

                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={bottomImages.middleTop} alt="Gallery image" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={bottomImages.middleBottom} alt="Gallery image" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                    </div>

                    <div className={styles.largeImage}>
                        <Image src={bottomImages.right} alt="Gallery image" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                </div>

                {credits && <p className={styles.credits}>{credits}</p>}
            </div>
        </section>
    );
}
