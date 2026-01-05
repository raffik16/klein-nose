"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Nose from "./components/Nose";

export default function Home() {
  const [noseScale, setNoseScale] = useState(0.5);

  const handleShrink = () => {
    setNoseScale((prev) => Math.max(0.1, prev - 0.15));
  };

  const handleGrow = () => {
    setNoseScale((prev) => Math.min(1.0, prev + 0.15));
  };

  const handleKleinsNose = () => {
    setNoseScale(1.0);
  };

  const isMaxSize = noseScale >= 1.0;
  const isMinSize = noseScale <= 0.1;

  return (
    <div className="spa-container">
      {/* Title */}
      <motion.h1
        className="spa-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nose Spa
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="spa-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Shrink it. Grow it. Experience it.
      </motion.p>

      {/* The Nose */}
      <div className="nose-wrapper">
        <Nose scale={noseScale} />
      </div>

      {/* Size indicator */}
      <motion.div
        className="size-indicator"
        animate={{ scale: isMaxSize ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isMaxSize ? "KLEIN'S LEGENDARY NOSE" : `Size: ${Math.round(noseScale * 100)}%`}
      </motion.div>

      {/* Controls */}
      <div className="controls">
        <motion.button
          className="btn btn-shrink"
          onClick={handleShrink}
          disabled={isMinSize}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shrink
        </motion.button>

        <motion.button
          className="btn btn-grow"
          onClick={handleGrow}
          disabled={isMaxSize}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Grow
        </motion.button>

        <motion.button
          className="btn btn-klein"
          onClick={handleKleinsNose}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={
            isMaxSize
              ? {
                  boxShadow: [
                    "0 0 20px #ffd700",
                    "0 0 40px #ffd700",
                    "0 0 20px #ffd700",
                  ],
                }
              : {}
          }
          transition={{ duration: 1, repeat: isMaxSize ? Infinity : 0 }}
        >
          KLEIN'S NOSE
        </motion.button>
      </div>
    </div>
  );
}
