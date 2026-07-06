import Image from "next/image";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.image}>
      <Image
        src="/hero.jpg"
        alt="Маша"
        fill
        priority
        className={styles.cover}
      />
    </div>
  );
}