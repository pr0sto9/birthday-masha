"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { letters } from "@/data/letters";

import NameCard from "@/components/NameCard";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingFlowers from "@/components/FloatingFlowers";

export default function Home() {
  return (
    <main className="hero-page">

      <FloatingHearts />
     

      <div className="container">

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          С Днём рождения,
          <br />
          Машуля ❤️
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          13 самых близких людей подготовили
          <br />
          для тебя несколько тёплых слов
        </motion.p>

        <section className="hero-grid">

          <motion.div
            className="hero-image"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hero.jpg"
              alt="Машуля"
              fill
              priority
              className="cover"
            />
          </motion.div>

          <motion.div
            className="hero-cards"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {letters.map((person, index) => (
              <NameCard
                key={person.slug}
                name={person.name}
                slug={person.slug}
                delay={index * 0.05}
              />
            ))}
          </motion.div>

        </section>

      </div>

    </main>
  );
}