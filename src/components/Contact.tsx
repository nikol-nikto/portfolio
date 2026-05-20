/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CornerSvg from "../assets/svg/corner.svg";

function Contact() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const EMAIL = "nikolnikto330@gmail.com";

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden px-8 py-16`}
    >
      <motion.div
        animate={{
          opacity: hovered ? 0.55 : 0.2,
          scale: hovered ? 1.15 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute w-105 h-45 rounded-[50%] blur-3xl pointer-events-none z-0
            bg-[radial-gradient(ellipse,rgba(0,255,153,0.35)_0%,rgba(0,200,100,0.12)_50%,transparent_80%)]`}
      />

      {[
        { top: "24%", left: "16%", rotate: "0deg" },
        { top: "24%", right: "16%", rotate: "90deg" },
        { bottom: "24%", left: "16%", rotate: "-90deg" },
        { bottom: "24%", right: "16%", rotate: "180deg" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            scale: hovered ? 1.35 : 1,
            x: hovered ? (i === 0 || i === 2 ? "8px" : "-8px") : "0px",
            y: hovered ? (i === 0 || i === 1 ? "8px" : "-8px") : "0px",
            opacity: hovered ? 0.7 : 0.3,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute w-8 h-8 z-1}`}
          style={{ ...pos }}
        >
          <CornerSvg
            width={32}
            height={32}
            color="rgba(0,255,153,0.8)"
            strokeWidth={5}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-2 text-center max-w-170`}
      >
        <p
          className={`font-jetbrains-mono text-[0.7rem] tracking-[0.22em] uppercase text-[rgba(0,255,153,0.45)] mb-6`}
        >
          05 · {t("contact.contact")}
        </p>

        <h2
          className={`font-jetbrains-mono text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold text-white leading-[1.1]
            tracking-[-0.02em] mb-5`}
        >
          {t("contact.let's")}{" "}
          <span
            className={`text-[#00ff99] italic text-shadow-[0_0_40px_rgba(0,255,153,0.35)]`}
          >
            {t("contact.keep_in_touch")}
          </span>
        </h2>

        <p
          className={`font-jetbrains-mono text-[clamp(0.78rem,1.2vw,0.92rem)] text-[rgba(255,255,255,0.4)] leading-[1.85]
            mb-12 font-light mx-[16%] lg:mx-0`}
        >
          {t("contact.desc1")}
          <br />
          {t("contact.desc2")}
        </p>

        <motion.a
          href={`mailto:${EMAIL}`}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className={`inline-block py-[0.8rem] px-[2.4rem] font-jetbrains-mono text-[0.85rem] font-bold tracking-[0.08em] uppercase
            ${
              hovered
                ? "text-black bg-[#00ff99] shadow-[0_0_28px_rgba(0,255,153,0.3),0_0_8px_rgba(0,255,153,0.15)]"
                : "text-[#00ff99] bg-[rgba(0,255,153,0.06)] shadow-[0_0_14px_rgba(0,255,153,0.12)]"
            }
            border-[1.5px] border-[#00ff99] rounded-md cursor-pointer no-underline relative z-3
            transition-colors duration-300 ease-in-out`}
        >
          {t("contact.get_in_touch")}
        </motion.a>

        <motion.p
          animate={{ opacity: hovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
          className={`font-jetbrains-mono text-[0.65rem] tracking-widest text-[rgba(0,255,153,0.7)] mt-4`}
        >
          {EMAIL}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;
