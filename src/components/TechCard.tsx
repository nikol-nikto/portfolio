/** @format */

import type { techs } from "../utils/Techs";

interface TechCardProp {
  tech: (typeof techs)[0];
}

function TechCard({ tech }: TechCardProp) {
  return (
    <div
      className={`flex flex-col align-middle gap-[0.6rem] py-4 px-3 min-w-22.5 shrink-0`}
    >
      <div
        className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center
          transition-all duration-200 ease-out relative overflow-hidden shadow-[0_0_0_0_${tech.color}00]`}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = `${tech.color}60`;
          el.style.background = `${tech.color}12`;
          el.style.boxShadow = `0 0 20px ${tech.color}30`;
          el.style.transform = "translateY(-4px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,255,255,0.08)";
          el.style.background = "rgba(255,255,255,0.04)";
          el.style.boxShadow = "none";
          el.style.transform = "none";
        }}
      >
        {tech.icon}
      </div>
      <span
        className={`font-jetbrains-mono text-[0.65rem] tracking-[0.06em] text-[rgba(255,255,255,0.45)] text-center
          whitespace-nowrap`}
      >
        {tech.label}
      </span>
    </div>
  );
}

export default TechCard;
