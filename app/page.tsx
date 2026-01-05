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
      {/* Header */}
      <header className="spa-header">
        <motion.h1
          className="spa-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nose Spa
        </motion.h1>
        <motion.p
          className="spa-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Shrink it. Grow it. Experience it.
        </motion.p>
      </header>

      {/* Nose Section - Centered */}
      <section className="nose-section">
        <Nose scale={noseScale} />
      </section>

      {/* Footer with Controls */}
      <footer className="spa-footer">
        <motion.div
          className="size-indicator"
          animate={{ scale: isMaxSize ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isMaxSize
            ? "KLEIN'S LEGENDARY NOSE"
            : `Size: ${Math.round(noseScale * 100)}%`}
        </motion.div>

        <div className="controls">
          <motion.button
            className="btn btn-shrink"
            onClick={handleShrink}
            disabled={isMinSize}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Shrink
          </motion.button>

          <motion.button
            className="btn btn-grow"
            onClick={handleGrow}
            disabled={isMaxSize}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Grow
          </motion.button>

          <motion.button
            className={`btn btn-klein ${isMaxSize ? "active" : ""}`}
            onClick={handleKleinsNose}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Klein's Nose
          </motion.button>
        </div>
      </footer>
    </div>
  );
}
