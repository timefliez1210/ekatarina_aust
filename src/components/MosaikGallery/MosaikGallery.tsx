import Image from 'next/image';
import styles from './MosaikGallery.module.css';

interface MosaikGalleryProps {
    // Row 1: Single large image
    topImage: string;
    // Row 2: Small left (1fr), Large right (2fr)
    row2Images: [string, string];
    text1: string;
    italicText1?: string;
    // Row 3: Large left, 2 small middle, Large right (same as bathroom)
    row3Images: {
        left: string;
        middleTop: string;
        middleBottom: string;
        right: string;
    };
    // Row 4: Same layout, different order (Large, Large, 2 small)
    row4Images: {
        left: string;
        middleTop: string;
        middleBottom: string;
        right: string;
    };
}

export default function MosaikGallery({
    topImage,
    row2Images,
    text1,
    italicText1,
    row3Images,
    row4Images
}: MosaikGalleryProps) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                {/* Row 1: Single large image */}
                <div className={styles.singleLargeImage}>
                    <Image src={topImage} alt="Interior design" fill quality={100} sizes="(max-width: 1500px) 80vw, 1200px" />
                </div>

                {/* Row 2: 1fr 2fr layout */}
                <div className={styles.twoColumnLayout}>
                    <div className={styles.smallLeftImage}>
                        <Image src={row2Images[0]} alt="Interior detail" fill quality={100} sizes="(max-width: 768px) 80vw, (max-width: 1500px) 27vw, 400px" />
                    </div>
                    <div className={styles.largeRightImage}>
                        <Image src={row2Images[1]} alt="Interior design" fill quality={100} sizes="(max-width: 768px) 90vw, (max-width: 1500px) 60vw, 900px" />
                    </div>
                </div>

                {/* Text block */}
                <div className={styles.textBlock}>
                    <p className={styles.text}>{text1}</p>
                    {italicText1 && <p className={`${styles.text} ${styles.italicText}`}>{italicText1}</p>}
                </div>

                {/* Row 3: Same as bathroom - 2 large + 2 small */}
                <div className={styles.fourImageGrid}>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.left} alt="Interior design" fill quality={100} sizes="(max-width: 480px) 80vw, (max-width: 768px) 40vw, (max-width: 1500px) 32vw, 480px" />
                    </div>
                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleTop} alt="Interior detail" fill quality={100} sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleBottom} alt="Interior detail" fill quality={100} sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                    </div>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.right} alt="Interior design" fill quality={100} sizes="(max-width: 480px) 80vw, (max-width: 768px) 40vw, (max-width: 1500px) 32vw, 480px" />
                    </div>
                </div>

                {/* Row 4: Large, Large, 2 Small on right */}
                <div className={styles.fourImageGridAlt}>
                    <div className={styles.largeImage}>
                        <Image src={row4Images.left} alt="Interior design" fill quality={100} sizes="(max-width: 480px) 80vw, (max-width: 768px) 40vw, (max-width: 1500px) 32vw, 480px" />
                    </div>
                    <div className={styles.largeImage}>
                        <Image src={row4Images.middleTop} alt="Interior design" fill quality={100} sizes="(max-width: 480px) 80vw, (max-width: 768px) 40vw, (max-width: 1500px) 32vw, 480px" />
                    </div>
                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={row4Images.middleBottom} alt="Interior detail" fill quality={100} sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={row4Images.right} alt="Interior detail" fill quality={100} sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1500px) 16vw, 240px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
