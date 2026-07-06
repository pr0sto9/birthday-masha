"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type Props = {
  name: string;
  slug: string;
  delay: number;
};

export default function NameCard({
  name,
  slug,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.5,
      }}
    >
      <Link
        href={`/letter/${slug}`}
        className="name-card"
      >
        <span>{name}</span>

        <Heart
          size={18}
          className="card-heart"
        />
      </Link>
    </motion.div>
  );
}