/** @format */

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.88, rotate: isDark ? 20 : -20 }}
      transition={{ type: "spring", stiffness: 300, damping: 14 }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-9 h-9 rounded-[50%] border-[1.5px] cursor-pointer relative overflow-hidden
        flex items-center justify-center shrink-0 transition-[border-color,background] duration-300 ease
        ${
          isDark
            ? `border-[rgba(0,255,153,0.35)] bg-[rgba(0,255,153,0.06)]`
            : `border-[rgba(0,153,85,0.4)] bg-[rgba(0,153,85,0.08)]`
        }`}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = isDark ? "#00ff99" : "#009955";
        el.style.boxShadow = isDark
          ? "0 0 12px rgba(0,255,153,0.3)"
          : "0 0 12px rgba(0,153,85,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = isDark
          ? "rgba(0,255,153,0.35)"
          : "rgba(0,153,85,0.4)";
        el.style.boxShadow = "none";
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="moon"
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00ff99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#009955"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
