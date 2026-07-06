import styles from "./NameGrid.module.css";
import NameCard from "./NameCard";
import { letters } from "@/data/letters";

export default function NameGrid() {
  return (
    <div className={styles.grid}>
      {letters.map((person, index) => (
        <NameCard
          key={person.slug}
          name={person.name}
          slug={person.slug}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}