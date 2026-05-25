/** @format */

import { motion } from "framer-motion";
import MarqueeRow from "./MarqueeRow";
import { row1, row2 } from "../utils/Techs";
import { useTranslation } from "react-i18next";

function TechStack({ number }: { number: string }) {
  const { t } = useTranslation();

  return (
    <section
      id="techstack"
      className={`p-[clamp(5rem,10vw,9rem)_clamp(1.5rem,7vw,6rem)] relative overflow-hidden`}
    >
      <div className={`max-w-275 w-full my-0 mx-auto relative`}>
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "none" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-[clamp(3rem,7vw,5rem)]`}
        >
          <p
            className={`font-jetbrains-mono text-[0.7rem] tracking-[0.22em] uppercase text-[rgba(0,255,153,0.45)] mb-3`}
          >
            {number} · {t("techstack.tools")}
          </p>
          <h2
            className={`font-jetbrains-mono text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold text-white leading-[1.05]
              tracking-tight`}
          >
            {t("techstack.tech")}{" "}
            <span
              className={`text-[#00ff99] italic text-shadow-[0_0_45px_rgba(0,255,153,0.3)]`}
            >
              {t("techstack.stack")}
            </span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`flex flex-col gap-2`}
      >
        <MarqueeRow items={row1} direction="left" speed={40} />
        <MarqueeRow items={row2} direction="right" speed={34} />
      </motion.div>
    </section>
  );
}

export default TechStack;
