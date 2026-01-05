"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Nose from "./components/Nose";

export default function Home() {
  const [noseScale, setNoseScale] = useState(0.3);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timeline animation - nose grows over time
  useEffect(() => {
    if (!isAutoAnimating) return;

    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
      setNoseScale((prev) => {
        // Slowly grow over time, max at 1.0 for auto
        const newScale = prev + 0.008;
        if (newScale >= 1.0) {
          setIsAutoAnimating(false);
          return 1.0;
        }
        return newScale;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoAnimating]);

  const handleShrink = () => {
    setIsAutoAnimating(false);
    setNoseScale((prev) => Math.max(0.1, prev - 0.15));
  };

  const handleGrow = () => {
    setIsAutoAnimating(false);
    setNoseScale((prev) => Math.min(2.0, prev + 0.15));
  };

  const handleKleinsNose = () => {
    setIsAutoAnimating(false);
    setNoseScale(2.0);
  };

  const handleReset = () => {
    setNoseScale(0.3);
    setTimeElapsed(0);
    setIsAutoAnimating(true);
  };

  const isKleinSize = noseScale >= 2.0;
  const isMinSize = noseScale <= 0.1;

  const getPhaseLabel = () => {
    if (noseScale >= 2.0) return "KLEIN'S LEGENDARY NOSE";
    if (noseScale >= 1.5) return "Enormous";
    if (noseScale >= 1.0) return "Fully Grown";
    if (noseScale >= 0.7) return "Maturing";
    if (noseScale >= 0.5) return "Growing";
    if (noseScale >= 0.3) return "Young";
    return "Tiny";
  };

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
          Klein's Nose Timeline
        </motion.h1>
        <motion.p
          className="spa-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Watch it grow. Shape its destiny.
        </motion.p>
      </header>

      {/* Nose Section - Centered */}
      <section className="nose-section">
        <Nose scale={noseScale} isKleinMode={isKleinSize} />
      </section>

      {/* Footer with Controls */}
      <footer className="spa-footer">
        {/* Timeline indicator */}
        <div className="timeline-info">
          <motion.div
            className="phase-label"
            key={getPhaseLabel()}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getPhaseLabel()}
          </motion.div>
          <div className="size-indicator">{Math.round(noseScale * 100)}%</div>
        </div>

        {/* Progress bar */}
        <div className="timeline-bar">
          <motion.div
            className="timeline-progress"
            animate={{ width: `${Math.min((noseScale / 2.0) * 100, 100)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
          <div className="timeline-markers">
            <span className="marker" style={{ left: "15%" }}>
              Young
            </span>
            <span className="marker" style={{ left: "50%" }}>
              Grown
            </span>
            <span className="marker" style={{ left: "100%" }}>
              Klein
            </span>
          </div>
        </div>

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
            disabled={isKleinSize}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Grow
          </motion.button>

          <motion.button
            className={`btn btn-klein ${isKleinSize ? "active" : ""}`}
            onClick={handleKleinsNose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Klein's Nose
          </motion.button>

          {!isAutoAnimating && (
            <motion.button
              className="btn btn-reset"
              onClick={handleReset}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Reset
            </motion.button>
          )}
        </div>

        {isAutoAnimating && (
          <motion.p
            className="auto-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
          >
            Growing automatically...
          </motion.p>
        )}
      </footer>

      {/* Klein's Nose celebration overlay */}
      <AnimatePresence>
        {isKleinSize && (
          <motion.div
            className="klein-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="klein-badge"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              MAXIMUM KLEIN
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
