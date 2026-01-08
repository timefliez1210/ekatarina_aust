import Image from 'next/image';
import styles from './OfficeRenders.module.css';

interface OfficeRendersProps {
    images: [string, string, string];
    creditFloor1: string;
    creditFloor2: string;
}

export default function OfficeRenders({
    images,
    creditFloor1,
    creditFloor2
}: OfficeRendersProps) {
    return (
        <section className={styles.officeRenders}>
            <div className={styles.rendersInner}>
                <div className={styles.imagesRow}>
                    <div className={styles.renderImage}>
                        <Image src={images[0]} alt="3D Render" fill />
                    </div>
                    <div className={styles.renderImage}>
                        <Image src={images[1]} alt="3D Render" fill />
                    </div>
                    <div className={styles.renderImage}>
                        <Image src={images[2]} alt="3D Render" fill />
                    </div>
                </div>

                <div className={styles.creditsSection}>
                    <p className={styles.creditText}>{creditFloor1}</p>
                    <p className={styles.creditText}>{creditFloor2}</p>
                </div>
            </div>
        </section>
    );
}
