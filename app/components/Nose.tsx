"use client";

import { motion } from "motion/react";

interface NoseProps {
  scale: number;
}

export default function Nose({ scale }: NoseProps) {
  return (
    <motion.div
      className="relative"
      animate={{ scale }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 1,
      }}
    >
      <svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        className="drop-shadow-2xl"
      >
        <defs>
          {/* Nose skin gradient */}
          <linearGradient id="noseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffcdb2" />
            <stop offset="50%" stopColor="#ffb4a2" />
            <stop offset="100%" stopColor="#e5989b" />
          </linearGradient>

          {/* Nostril gradient */}
          <radialGradient id="nostrilGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </radialGradient>

          {/* Highlight gradient */}
          <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Main nose shape - big bulbous cartoon nose */}
        <motion.ellipse
          cx="200"
          cy="280"
          rx="140"
          ry="180"
          fill="url(#noseGradient)"
          stroke="#e5989b"
          strokeWidth="3"
        />

        {/* Nose bridge */}
        <motion.path
          d="M 160 100 Q 200 80 240 100 Q 260 200 260 280 Q 200 300 140 280 Q 140 200 160 100"
          fill="url(#noseGradient)"
          stroke="#e5989b"
          strokeWidth="2"
        />

        {/* Highlight on nose */}
        <motion.ellipse
          cx="170"
          cy="220"
          rx="40"
          ry="60"
          fill="url(#highlightGradient)"
          opacity="0.5"
        />

        {/* Left nostril */}
        <motion.ellipse
          cx="140"
          cy="380"
          rx="45"
          ry="35"
          fill="url(#nostrilGradient)"
          animate={{
            rotate: [0, -3, 3, 0],
            scaleX: [1, 1.05, 0.95, 1]
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          key={`left-${scale}`}
        />

        {/* Right nostril */}
        <motion.ellipse
          cx="260"
          cy="380"
          rx="45"
          ry="35"
          fill="url(#nostrilGradient)"
          animate={{
            rotate: [0, 3, -3, 0],
            scaleX: [1, 0.95, 1.05, 1]
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          key={`right-${scale}`}
        />

        {/* Nostril inner highlights */}
        <ellipse
          cx="135"
          cy="375"
          rx="15"
          ry="10"
          fill="rgba(255,255,255,0.1)"
        />
        <ellipse
          cx="255"
          cy="375"
          rx="15"
          ry="10"
          fill="rgba(255,255,255,0.1)"
        />

        {/* Bottom nose curve/septum */}
        <motion.path
          d="M 155 410 Q 200 450 245 410"
          fill="none"
          stroke="#e5989b"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
