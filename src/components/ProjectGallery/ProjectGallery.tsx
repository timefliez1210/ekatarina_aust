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
                                quality={100}
                                sizes="(max-width: 968px) 80vw, (max-width: 1500px) 27vw, 400px"
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
                        <Image src={bottomImages.left} alt="Gallery image" fill quality={100} sizes="(max-width: 968px) 80vw, (max-width: 1500px) 32vw, 480px" />
                    </div>

                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={bottomImages.middleTop} alt="Gallery image" fill quality={100} sizes="(max-width: 968px) 80vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={bottomImages.middleBottom} alt="Gallery image" fill quality={100} sizes="(max-width: 968px) 80vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                    </div>

                    <div className={styles.largeImage}>
                        <Image src={bottomImages.right} alt="Gallery image" fill quality={100} sizes="(max-width: 968px) 80vw, (max-width: 1500px) 32vw, 480px" />
                    </div>
                </div>

                {credits && <p className={styles.credits}>{credits}</p>}
            </div>
        </section>
    );
}
