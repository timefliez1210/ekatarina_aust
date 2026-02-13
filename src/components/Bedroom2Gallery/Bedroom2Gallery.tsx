import Image from 'next/image';
import styles from './Bedroom2Gallery.module.css';

interface Bedroom2GalleryProps {
    landscapeImage: string;
    portraitImages: [string, string];
    text1: string;
    text2: string;
    row3Images: {
        left: string;
        middleTop: string;
        middleBottom: string;
        right: string;
    };
}

export default function Bedroom2Gallery({
    landscapeImage,
    portraitImages,
    text1,
    text2,
    row3Images
}: Bedroom2GalleryProps) {
    return (
        <section className={styles.bedroom2Gallery}>
            <div className={styles.galleryInner}>
                {/* Row 1: Full width landscape */}
                <div className={styles.fullWidthRow}>
                    <div className={styles.landscapeImage}>
                        <Image src={landscapeImage} alt="Bedroom interior" fill sizes="100vw" quality={90} />
                    </div>
                </div>

                {/* Row 2: Two portrait images */}
                <div className={styles.twoPortraitRow}>
                    <div className={styles.portraitImage}>
                        <Image src={portraitImages[0]} alt="Bedroom design" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className={styles.portraitImage}>
                        <Image src={portraitImages[1]} alt="Bedroom design" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </div>

                {/* Text section */}
                <div className={styles.textSection}>
                    <p className={styles.text}>{text1}</p>
                    <p className={styles.text}>{text2}</p>
                </div>

                {/* Row 3: Large + 2 Small + Large */}
                <div className={styles.fourImageGrid}>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.left} alt="Bedroom design" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleTop} alt="Bedroom detail" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleBottom} alt="Bedroom detail" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                    </div>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.right} alt="Bedroom design" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                </div>
            </div>
        </section>
    );
}
