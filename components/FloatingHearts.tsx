"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = [
  { left: "6%", top: "10%", size: 20, delay: 0 },
  { left: "16%", top: "75%", size: 16, delay: 1 },
  { left: "28%", top: "30%", size: 24, delay: 2 },
  { left: "42%", top: "8%", size: 18, delay: .5 },
  { left: "58%", top: "70%", size: 22, delay: 1.5 },
  { left: "72%", top: "22%", size: 16, delay: 2.5 },
  { left: "84%", top: "62%", size: 20, delay: 1 },
  { left: "93%", top: "18%", size: 14, delay: 3 },
];

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="floating-heart"
          style={{
            left: heart.left,
            top: heart.top,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: heart.delay,
          }}
        >
          <Heart
            size={heart.size}
            fill="#f3b6c9"
            color="#f3b6c9"
          />
        </motion.div>
      ))}
    </>
  );
}