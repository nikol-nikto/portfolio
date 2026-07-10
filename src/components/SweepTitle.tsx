/** @format */

import { motion } from "framer-motion";

interface SweepTitleProps {
  title: string;
  hovered: boolean;
  dimmed: boolean;
}

function SweepTitle({ title, hovered, dimmed }: SweepTitleProps) {
  return (
    <h3
      className={`font-jetbrains-mono text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-none tracking-[-0.02em]
        relative inline-block transition-[color] duration-300 ease
        ${dimmed ? `text-(--text-muted)` : `text-(--text-secondary)`}`}
    >
      {title}

      <motion.span
        aria-hidden
        initial={false}
        animate={{
          clipPath: hovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute inset-0 text-(--accent) text-shadow-[0_0_40px_var(--accent-glow)]
          pointer-events-none whitespace-nowrap`}
      >
        {title}
      </motion.span>
    </h3>
  );
}

export default SweepTitle;
