/** @format */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SweepTitle from "./SweepTitle";
import DrawIconSvg from "../assets/svg/drowIcon.svg";
import type { projects } from "../utils/Projects";

interface ProjectRowProps {
  project: (typeof projects)[0];
  index: number;
  onHover: (id: string) => void;
  onLeave: () => void;
  isAnyHovered: boolean;
  isThisHovered: boolean;
}

function ProjectRow({
  project,
  index,
  onHover,
  onLeave,
  isAnyHovered,
  isThisHovered,
}: ProjectRowProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.08 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => onHover(project.id)}
        onHoverEnd={onLeave}
        className={`flex flex-col gap-2 py-[1.4rem] px-0 no-underline border-b border-(--border) cursor-pointer`}
      >
        <div className={`flex items-center gap-4`}>
          <span
            className={`font-jetbrains-mono text-[0.78rem] shrink-0 w-[2.2rem] transition-[color] duration-250 ease
                ${isThisHovered ? `text-(--accent-dim)` : `text-(--text-muted)`}`}
          >
            .{project.id}
          </span>

          <SweepTitle
            title={project.title}
            hovered={isThisHovered}
            dimmed={isAnyHovered && !isThisHovered}
          />

          <DrawIconSvg visible={isThisHovered} />
        </div>

        <div className={`flex gap-[0.45rem] flex-wrap pl-[3.2rem]`}>
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              animate={{
                opacity: isThisHovered ? 1 : isAnyHovered ? 0.3 : 0.55,
                color: isThisHovered
                  ? "var(--accent)"
                  : "var(--text-secondary)",
                borderColor: isThisHovered
                  ? "var(--border-accent)"
                  : "var(--border)",
              }}
              transition={{ duration: 0.25 }}
              className={`font-jetbrains-mono text-[0.6rem] tracking-widest uppercase border rounded-[3px]
                py-[0.18rem] px-[0.55rem] transition-[background-color] duration-250 ease
                ${isThisHovered ? `text-(--bg-card-hover)` : `text-(--bg-card)`}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  );
}

export default ProjectRow;
