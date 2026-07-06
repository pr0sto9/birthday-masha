"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { letters } from "@/data/letters";

export default function LetterPage() {
  const params = useParams();

  const slug = params.slug as string;

  const current =
    letters.find((item) => item.slug === slug) || letters[0];

  return (
    <main className="letter-page">
      <div className="letter-layout">

        <aside className="sidebar">

          <h2>Для Машули ❤️</h2>

          <nav>
            {letters.map((person) => (
              <Link
                key={person.slug}
                href={`/letter/${person.slug}`}
                className={
                  person.slug === current.slug
                    ? "sidebar-link active"
                    : "sidebar-link"
                }
              >
                ♡ {person.name}
              </Link>
            ))}
          </nav>

        </aside>

        <AnimatePresence mode="wait">

          <motion.section
            key={current.slug}
            className="letter-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: .45 }}
          >

            <div className="gallery">

              <h1>{current.name}</h1>

              <div className="photo-big">
                <Image
                  src={current.photos[0]}
                  alt=""
                  fill
                  className="cover"
                />
              </div>

              <div className="photo-row">

                <div className="photo-small">
                  <Image
                    src={current.photos[1]}
                    alt=""
                    fill
                    className="cover"
                  />
                </div>

                <div className="photo-small">
                  <Image
                    src={current.photos[2]}
                    alt=""
                    fill
                    className="cover"
                  />
                </div>

              </div>

            </div>

            <motion.article
              className="letter-paper"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p>{current.letter}</p>
            </motion.article>

          </motion.section>

        </AnimatePresence>

      </div>
    </main>
  );
}