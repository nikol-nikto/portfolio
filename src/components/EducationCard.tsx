/** @format */

import { motion } from "framer-motion";
import { useState } from "react";
import type { EducationStep } from "../types/EducationDataTypes";
import { useTranslation } from "react-i18next";

interface EducationCardProps {
  item: EducationStep;
  index: number;
}

function EducationCard({ item, index }: EducationCardProps) {
  const { t } = useTranslation();

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.85,
        delay: 0.15 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl p-[2.25rem_2rem] cursor-default flex-[1_1_300px] max-w-105 min-w-70
        transition-all duration-300 ease border-[1.5px] border-solid 
        ${hovered ? "-translate-y-1.5" : "translate-y-0"}
        ${
          item.active
            ? hovered
              ? `bg-[linear-gradient(135deg,#0d2e20_0%,#0a2419_100%)]
              border-[rgba(0,255,153,0.6)]
              shadow-[0_20px_50px_rgba(0,255,153,0.15),0_0_0_1px_rgba(0,255,153,0.1)]`
              : `bg-[linear-gradient(135deg,#0b2a1d_0%,#091f16_100%)]
              border-[rgba(0,255,153,0.35)]
              shadow-[0_8px_30px_rgba(0,255,153,0.08)]`
            : hovered
              ? `bg-[rgba(255,255,255,0.05)]
              border-[rgba(255,255,255,0.15)]
              shadow-[0_16px_40px_rgba(0,0,0,0.4)]`
              : `bg-[rgba(255,255,255,0.03)]
              border-[rgba(255,255,255,0.08)]
              shadow-none`
        }`}
    >
      {item.active && (
        <div
          className={`absolute -top-px right-6 bg-[#00ff99] text-black font-jetbrains-mono text-[0.55rem]
            font-bold tracking-[0.15em] uppercase p-[0.2rem_0.65rem] rounded-[0_0_6px_6px]`}
        >
          {t("education.latest")}
        </div>
      )}

      <h3
        className={`font-jetbrains-mono text-[clamp(0.95rem,1.6vw,1.1rem)] font-bold text-white leading-[1.35] mb-[0.3rem]`}
      >
        {item.degree}
      </h3>

      <p
        className={`font-jetbrains-mono text-[0.75rem] mb-[0.6rem] font-normal
            ${item.active ? `text-[rgba(0,255,153,0.7)]` : `text-[rgba(255,255,255,0.4)]`}`}
      >
        {item.specialization}
      </p>

      <p
        className={`font-jetbrains-mono text-[0.72rem] text-[rgba(255,255,255,0.35)] mb-3 tracking-[0.04em]`}
      >
        {item.period}
      </p>

      <div className={`flex items-center gap-2 mb-6`}>
        <span className={`text-[1rem]`}>🎓</span>

        <span
          className={`font-jetbrains-mono text-[1rem] font-bold text-[#00ff99] text-shadow-[0_0_20px_rgba(0,255,153,0.4)]`}
        >
          {item.gpa}
        </span>
      </div>

      <div
        className={`h-px mb-5 ${item.active ? `bg-[rgba(0,255,153,0.15)]` : `bg-[rgba(255,255,255,0.06)]`}`}
      />

      <p
        className={`font-jetbrains-mono text-[0.75rem] text-[rgba(255,255,255,0.45)] leading-[1.65] mb-[0.4rem]`}
      >
        {item.institution}
      </p>

      <p
        className={`font-jetbrains-mono text-[0.68rem] text-[rgba(255,255,255,0.25)] leading-normal mb-3`}
      >
        {item.location}
      </p>

      <p
        className={`font-jetbrains-mono text-[0.65rem] tracking-[0.04em] italic
            ${item.active ? `text-[rgba(0,255,153,0.5)]` : `text-[rgba(255,255,255,0.2)]`}`}
      >
        ✦ {item.note}
      </p>
    </motion.div>
  );
}

export default EducationCard;
