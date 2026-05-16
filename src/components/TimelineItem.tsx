/** @format */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Job } from "../types/ExperienceDataTypes";

type TimelineItemProps = {
  job: Job;
  index: number;
};

function TimelineItem({ job, index }: TimelineItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const isLatest = index === 1;

  return (
    <div
      ref={ref}
      className={`relative min-h-110 grid lg:grid-cols-[1fr_32px_1fr] grid-cols-1`}
    >
      <div className={`pr-10 pb-20`}>
        <div className={`sticky top-[38vh] text-right`}>
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
            className={`font-jetbrains-mono text-[clamp(1.3rem,2.2vw,2rem)] font-bold leading-[1.2]
                whitespace-pre-line tracking-[-0.01em]
                ${isLatest ? "text-[#00ff99]" : "color-[rgba(255,255,255,0.2)]"}
                ${isLatest ? "text-shadow-[0_0_28px_rgba(0,255,153,0.35)]" : "text-shadow-none"}`}
          >
            {job.period}
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`inline-block mt-2 font-jetbrains-mono text-[0.6rem] tracking-[0.16em] uppercase
                px-[0.55rem] py-[0.18rem] rounded-[3px] border border-solid
                ${
                  isLatest
                    ? "text-[rgba(0,255,153,0.7)] border-[rgba(0,255,153,0.3)]"
                    : "text-[rgba(255,255,255,0.25)] border-[rgba(255,255,255,0.1)]"
                }`}
          >
            {job.type}
          </motion.span>
        </div>
      </div>

      <div className="flex justify-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: 0.1,
            type: "spring",
            stiffness: 260,
          }}
          className={`sticky top-[calc(38vh+0.5rem)] w-3.25 h-3.25 rounded-full bg-[#00ff99]
            shadow-[0_0_18px_rgba(0,255,153,0.7)] shrink-0 z-2`}
        />
      </div>

      <div style={{ paddingLeft: "2.5rem", paddingBottom: "5rem" }}>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className={`font-jetbrains-mono text-[0.65rem] tracking-[0.16rem] uppercase
                text-[rgba(0,255,153,0.45)] mb-[0.55rem]`}
          >
            {job.dateRange}
          </p>

          <h3
            className={`font-jetbrains-mono text-[clamp(1rem,1.8vw,1.4rem)] font-bold text-white mb-1
                tracking-[-0.01em]`}
          >
            {job.title}
          </h3>

          <p
            className={`font-jetbrains-mono text-xs text-[rgba(255,255,255,0.35)] tracking-[0.04em] mb-[1.6rem]`}
          >
            {job.company} · {job.location}
          </p>

          <ul className={`list-none p-0 m-0 mb-[1.6rem] flex flex-col gap-3`}>
            {job.tasks.map((task, ti) => (
              <motion.li
                key={ti}
                initial={{ opacity: 0, x: 14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + ti * 0.09 }}
                className={`flex gap-[0.65rem] items-start font-jetbrains-mono text-[clamp(0.73rem,1vw,0.82rem)]
                    text-[rgba(255,255,255,0.55)] leading-[1.8] font-light`}
              >
                <span
                  style={{
                    color: "#00ff99",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                    fontSize: "0.58rem",
                  }}
                  className={`text-[#00ff99] shrink-0 mt-[0.2rem] text-[0.6rem]`}
                >
                  ▸
                </span>
                {task}
              </motion.li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-[0.45rem]`}>
            {job.tags.map((tag) => (
              <span
                key={tag}
                className={`font-jetbrains-mono text-[0.6rem] tracking-widest uppercase text-[#00ff99]
                    bg-[rgba(0,255,153,0.06)] border border-[rgba(0,255,153,0.18)] px-[0.6rem] py-[0.18rem] rounded-[3px]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TimelineItem;
