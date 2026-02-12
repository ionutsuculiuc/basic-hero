"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="silk-bg flex min-h-screen items-center justify-center overflow-hidden">
      <div className="silk-vignette" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-20 text-center w-full">
        <svg
          className="w-full max-w-4xl"
          viewBox="0 0 1000 200"
          overflow="visible"
        >
          <motion.text
            x="500"
            y="140"
            textAnchor="middle"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "120px",
              fill: "#3d2a1a",
              stroke: "#3d2a1a",
              strokeWidth: 1.5,
              strokeDasharray: 3000,
            }}
            initial={{ strokeDashoffset: 3000, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
            transition={{
              strokeDashoffset: {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              },
              fillOpacity: {
                duration: 0.8,
                ease: "easeIn",
                delay: 1.8,
              },
            }}
          >
            Maria &amp; Andrei
          </motion.text>
        </svg>

        <motion.p
          className="text-serif-light text-xl sm:text-2xl md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 2.5 }}
        >
          15 August 2026
        </motion.p>
      </div>
    </section>
  );
}
