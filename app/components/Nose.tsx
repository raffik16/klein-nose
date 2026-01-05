"use client";

import { motion } from "motion/react";

interface NoseProps {
  scale: number;
}

export default function Nose({ scale }: NoseProps) {
  return (
    <motion.div
      className="nose-container"
      animate={{ scale }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 1,
      }}
    >
      <svg
        viewBox="0 0 200 260"
        className="nose-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Base skin gradient - warm flesh tones */}
          <linearGradient id="skinBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d0c5" />
            <stop offset="30%" stopColor="#e8b4a8" />
            <stop offset="70%" stopColor="#dda596" />
            <stop offset="100%" stopColor="#d49888" />
          </linearGradient>

          {/* Bridge highlight gradient */}
          <linearGradient id="bridgeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Side shadow gradient - left */}
          <linearGradient id="shadowLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(120,70,60,0.35)" />
          </linearGradient>

          {/* Side shadow gradient - right */}
          <linearGradient id="shadowRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(120,70,60,0.25)" />
          </linearGradient>

          {/* Nostril gradient - deep shadow */}
          <radialGradient id="nostrilGradient" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#1a0f0a" />
            <stop offset="60%" stopColor="#2d1810" />
            <stop offset="100%" stopColor="#3d2218" />
          </radialGradient>

          {/* Tip highlight */}
          <radialGradient id="tipHighlight" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Under-nose shadow */}
          <linearGradient id="underShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(100,60,50,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Soft blur filter for edges */}
          <filter id="softEdge" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>

          {/* Drop shadow filter */}
          <filter id="noseShadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>

        {/* Main nose group with shadow */}
        <g filter="url(#noseShadow)">
          {/* Base nose shape - main body */}
          <path
            d="M 100 10
               C 85 10, 75 30, 72 60
               C 68 100, 65 140, 58 170
               C 52 195, 40 210, 35 225
               C 32 235, 38 245, 55 248
               L 100 255
               L 145 248
               C 162 245, 168 235, 165 225
               C 160 210, 148 195, 142 170
               C 135 140, 132 100, 128 60
               C 125 30, 115 10, 100 10
               Z"
            fill="url(#skinBase)"
          />

          {/* Left alar wing (nostril wing) */}
          <path
            d="M 58 170
               C 45 175, 30 190, 28 210
               C 26 225, 32 240, 50 245
               C 58 246, 62 240, 60 230
               C 58 220, 50 210, 55 195
               C 58 185, 58 175, 58 170
               Z"
            fill="url(#skinBase)"
          />

          {/* Right alar wing (nostril wing) */}
          <path
            d="M 142 170
               C 155 175, 170 190, 172 210
               C 174 225, 168 240, 150 245
               C 142 246, 138 240, 140 230
               C 142 220, 150 210, 145 195
               C 142 185, 142 175, 142 170
               Z"
            fill="url(#skinBase)"
          />
        </g>

        {/* Bridge highlight - center of nose */}
        <path
          d="M 100 15
             C 92 15, 88 35, 86 60
             C 83 100, 82 140, 85 180
             C 87 200, 92 215, 100 225
             C 108 215, 113 200, 115 180
             C 118 140, 117 100, 114 60
             C 112 35, 108 15, 100 15
             Z"
          fill="url(#bridgeHighlight)"
        />

        {/* Left side shadow */}
        <path
          d="M 72 60
             C 68 100, 65 140, 58 170
             C 52 195, 42 210, 38 225
             C 36 232, 38 238, 45 242
             L 55 248
             C 48 240, 45 230, 48 218
             C 52 200, 62 180, 68 160
             C 75 135, 78 100, 80 65
             C 82 45, 85 25, 100 15
             C 90 15, 80 30, 72 60
             Z"
          fill="url(#shadowLeft)"
        />

        {/* Right side shadow (lighter) */}
        <path
          d="M 128 60
             C 132 100, 135 140, 142 170
             C 148 195, 158 210, 162 225
             C 164 232, 162 238, 155 242
             L 145 248
             C 152 240, 155 230, 152 218
             C 148 200, 138 180, 132 160
             C 125 135, 122 100, 120 65
             C 118 45, 115 25, 100 15
             C 110 15, 120 30, 128 60
             Z"
          fill="url(#shadowRight)"
        />

        {/* Tip highlight */}
        <ellipse
          cx="100"
          cy="220"
          rx="25"
          ry="18"
          fill="url(#tipHighlight)"
        />

        {/* Left nostril - teardrop shape */}
        <motion.path
          d="M 65 225
             C 55 228, 48 235, 50 242
             C 52 248, 60 250, 70 248
             C 78 246, 82 240, 80 234
             C 78 228, 72 224, 65 225
             Z"
          fill="url(#nostrilGradient)"
          animate={{
            d: [
              "M 65 225 C 55 228, 48 235, 50 242 C 52 248, 60 250, 70 248 C 78 246, 82 240, 80 234 C 78 228, 72 224, 65 225 Z",
              "M 63 225 C 52 228, 45 236, 47 243 C 50 250, 59 252, 70 249 C 79 247, 84 240, 82 233 C 79 227, 71 223, 63 225 Z",
              "M 65 225 C 55 228, 48 235, 50 242 C 52 248, 60 250, 70 248 C 78 246, 82 240, 80 234 C 78 228, 72 224, 65 225 Z",
            ],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          key={`left-nostril-${scale}`}
        />

        {/* Right nostril - teardrop shape */}
        <motion.path
          d="M 135 225
             C 145 228, 152 235, 150 242
             C 148 248, 140 250, 130 248
             C 122 246, 118 240, 120 234
             C 122 228, 128 224, 135 225
             Z"
          fill="url(#nostrilGradient)"
          animate={{
            d: [
              "M 135 225 C 145 228, 152 235, 150 242 C 148 248, 140 250, 130 248 C 122 246, 118 240, 120 234 C 122 228, 128 224, 135 225 Z",
              "M 137 225 C 148 228, 155 236, 153 243 C 150 250, 141 252, 130 249 C 121 247, 116 240, 118 233 C 121 227, 129 223, 137 225 Z",
              "M 135 225 C 145 228, 152 235, 150 242 C 148 248, 140 250, 130 248 C 122 246, 118 240, 120 234 C 122 228, 128 224, 135 225 Z",
            ],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          key={`right-nostril-${scale}`}
        />

        {/* Columella (center divider between nostrils) */}
        <path
          d="M 95 242
             C 95 248, 97 254, 100 256
             C 103 254, 105 248, 105 242
             C 105 238, 103 235, 100 235
             C 97 235, 95 238, 95 242
             Z"
          fill="url(#skinBase)"
        />

        {/* Columella shadow */}
        <path
          d="M 97 243
             C 97 247, 98 252, 100 254
             C 99 252, 98 248, 98 244
             C 98 241, 99 239, 100 238
             C 98 239, 97 241, 97 243
             Z"
          fill="rgba(100,60,50,0.2)"
        />

        {/* Subtle nostril rim highlights */}
        <path
          d="M 68 226
             C 60 228, 54 233, 55 238"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 132 226
             C 140 228, 146 233, 145 238"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
