/** @format */

import { JOBS } from "../utils/ExperienceData";
import TimelineItem from "./TimelineItem";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 15%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const fillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`min-h-screen relative text-white
        p-[clamp(5rem,10vw,9rem)_clamp(1.5rem,7vw,6rem)]`}
    >
      <div className="max-w-275 w-full mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[clamp(3rem,7vw,6rem)]"
        >
          <p
            className={`font-jetbrains-mono text-xs tracking-[0.22em] uppercase
                text-[rgba(0,255,153,0.45)] mb-3 clamp(0.7rem, 1.5vw, 0.9rem) `}
          >
            04 · Career
          </p>
          <h2
            className={`font-jetbrains-mono font-bold text-[clamp(2.2rem,5.5vw,4.8rem)]
            leading-[1.05] tracking-tight text-white`}
          >
            My{" "}
            <span className="text-[#00ff99] italic text-shadow-[0_0_45px_rgba(0,255,153,0.3)]">
              experience.
            </span>
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div
            className={`absolute left-[calc(50%-16px)] top-0 bottom-0 w-px -translate-x-1/2
            bg-[rgba(255,255,255,0.06)] z-0`}
          >
            <motion.div
              className={`absolute left-0 top-0 w-full bg-[linear-gradient(to_bottom,#00ff99,rgba(0,255,153,0.35))]
                shadow-[0_0_10px_rgba(0,255,153,0.5)]`}
              style={{ height: fillHeight }}
            />
          </div>

          {JOBS.map((job, i) => (
            <TimelineItem key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
