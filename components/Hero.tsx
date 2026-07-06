"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import HeroImage from "./HeroImage";
import NameGrid from "./NameGrid";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          С Днём рождения,
          <br />
          <span>Машуля ❤️</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          13 самых близких людей приготовили
          <br />
          для тебя несколько тёплых слов
        </motion.p>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <HeroImage />
          <NameGrid />
        </motion.div>
      </div>
    </main>
  );
}