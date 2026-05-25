/** @format */

import { motion } from "framer-motion";
import { getEducationData } from "../utils/EducationData";
import EducationCard from "./EducationCard";
import { useTranslation } from "react-i18next";

function Education({ number }: { number: string }) {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className={`p-[clamp(5rem,10vw,9rem)_clamp(1.5rem,7vw,6rem)] relative overflow-hidden`}
    >
      <div className={`max-w-275 w-full mx-auto relative`}>
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-[clamp(3rem,7vw,5.5rem)]`}
        >
          <p
            className={`font-jetbrains-mono text-[0.7rem] tracking-[0.22em] uppercase
              text-[rgba(0,255,153,0.45)] mb-3`}
          >
            {number} · {t("education.background")}
          </p>

          <h2
            className={`font-jetbrains-mono text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold text-white
              leading-[1.05] tracking-tight flex items-center gap-[0.6rem] flex-wrap`}
          >
            <span
              className={`text-[#00ff99] text-[0.75em] text-shadow-[0_0_30px_rgba(0,255,153,0.3)]`}
            ></span>
            {t("education.my")}{" "}
            <span
              className={`text-[#00ff99] italic text-shadow-[0_0_45px_rgba(0,255,153,0.3)]`}
            >
              {t("education.education")}
            </span>
          </h2>
        </motion.div>

        <div className={`flex gap-6 flex-wrap justify-center`}>
          {getEducationData().map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
