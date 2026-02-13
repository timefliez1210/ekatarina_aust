import Image from "next/image";
import styles from "./ProjectRenders.module.css";

interface ProjectRendersProps {
  images: [string, string];
  text: string;
}

export default function ProjectRenders({ images, text }: ProjectRendersProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.imagesRow}>
          <div className={styles.renderImageWrapper}>
            <Image
              src={images[0]}
              alt="3D render 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className={styles.renderImage}
            />
          </div>
          <div className={styles.renderImageWrapper}>
            <Image
              src={images[1]}
              alt="3D render 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className={styles.renderImage}
            />
          </div>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}
