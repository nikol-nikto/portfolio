/** @format */

import { AnimatePresence, motion } from "framer-motion";

interface DrawIconSvgProp {
  visible: boolean;
}

function DrawIconSvg({ visible }: DrawIconSvgProp) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.svg
          key="icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
          className={`shrink-0`}
        >
          <motion.path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.35, ease: "easeOut" },
              },
            }}
          />
          <motion.line
            x1="10"
            y1="14"
            x2="21"
            y2="3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.25, delay: 0.2, ease: "easeOut" },
              },
            }}
          />
          <motion.polyline
            points="15 3 21 3 21 9"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.3, ease: "easeOut" },
              },
            }}
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}

export default DrawIconSvg;
