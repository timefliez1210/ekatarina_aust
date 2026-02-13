import Image from 'next/image';
import styles from './OfficeGallery.module.css';

interface OfficeGalleryProps {
    row1Images: [string, string];
    row2Image: string;
    text: string;
    row3Images: {
        left: string;
        middleTop: string;
        middleBottom: string;
        right: string;
    };
    row4Images: [string, string, string];
    row5Images: [string, string, string];
}

export default function OfficeGallery({
    row1Images,
    row2Image,
    text,
    row3Images,
    row4Images,
    row5Images
}: OfficeGalleryProps) {
    return (
        <section className={styles.officeGallery}>
            <div className={styles.galleryInner}>
                {/* Row 1: Two equal images (1fr 1fr) */}
                <div className={styles.twoColumnEqual}>
                    <div className={styles.equalImage}>
                        <Image src={row1Images[0]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className={styles.equalImage}>
                        <Image src={row1Images[1]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </div>

                {/* Row 2: Full width image */}
                <div className={styles.fullWidthRow}>
                    <div className={styles.fullWidthImage}>
                        <Image src={row2Image} alt="Office interior" fill sizes="100vw" quality={90} />
                    </div>
                </div>

                {/* Row 3: Large + 2 Small + Large */}
                <div className={styles.fourImageGrid}>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.left} alt="Office design" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                    <div className={styles.smallImagesColumn}>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleTop} alt="Office detail" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                        <div className={styles.smallImage}>
                            <Image src={row3Images.middleBottom} alt="Office detail" fill sizes="(max-width: 768px) 50vw, 20vw" />
                        </div>
                    </div>
                    <div className={styles.largeImage}>
                        <Image src={row3Images.right} alt="Office design" fill sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>
                </div>

                {/* Text section */}
                <div className={styles.textSection}>
                    <p className={styles.text}>{text}</p>
                </div>

                {/* Row 4: Three equal images (1fr 1fr 1fr) */}
                <div className={styles.threeColumnEqual}>
                    <div className={styles.equalImage}>
                        <Image src={row4Images[0]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className={styles.equalImage}>
                        <Image src={row4Images[1]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className={styles.equalImage}>
                        <Image src={row4Images[2]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                </div>

                {/* Row 5: Three equal images (1fr 1fr 1fr) */}
                <div className={styles.threeColumnEqual}>
                    <div className={styles.equalImage}>
                        <Image src={row5Images[0]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className={styles.equalImage}>
                        <Image src={row5Images[1]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className={styles.equalImage}>
                        <Image src={row5Images[2]} alt="Office interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                </div>
            </div>
        </section>
    );
}
