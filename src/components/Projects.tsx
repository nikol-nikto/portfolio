/** @format */

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "../utils/Projects";
import ProjectRow from "./ProjectRow";
import { useTranslation } from "react-i18next";

function Projects({ number }: { number: string }) {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const imageYRef = useRef(0);
  const [imageY, setImageY] = useState(0);
  const prevMouseYRef = useRef(0);
  const rafRef = useRef<number>(0);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  const hoveredProject = projects.find((p) => p.id === hoveredId) ?? null;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const delta = e.clientY - prevMouseYRef.current;
    prevMouseYRef.current = e.clientY;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      imageYRef.current = Math.max(
        -40,
        Math.min(40, imageYRef.current + delta * 0.14),
      );
      setImageY(imageYRef.current);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseMove={handleMouseMove}
      className={`bg-[linear-gradient(180deg,var(--bg-primary)_0%,var(--bg-section-b)_100%)] relative
        p-[clamp(5rem,10vw,9rem)_clamp(1.5rem,7vw,6rem)] overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            key={hoveredProject.id}
            initial={{ opacity: 0, scale: 0.93, y: imageY + 16 }}
            animate={{ opacity: 1, scale: 1, y: imageY }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              opacity: { duration: 0.28, ease: "easeOut" },
              scale: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 0.12, ease: "linear" },
            }}
            className={`fixed right-[clamp(2rem,5vw,5rem)] top-[50%] transform-[translateY(-50%)]
              w-[clamp(260px,26vw,400px)] aspect-16/10 rounded-xl overflow-hidden border border-(--border-accent)
              shadow-[0_24px_60px_rgba(0,0,0,0.5)] z-50 pointer-events-none`}
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className={`w-full h-full object-cover`}
            />

            <div
              className={`absolute bottom-0 left-0 right-0 p-[0.85rem_1.1rem]
                bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_100%)]`}
            >
              <p
                className={`font-jetbrains-mono text-[0.65rem] text-(--accent) tracking-[0.12em] uppercase`}
              >
                {hoveredProject.year} · {hoveredProject.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`max-w-275 my-0 mx-auto relative z-1`}>
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-[clamp(2.5rem,6vw,5rem)]`}
          >
            <div className={`flex items-center gap-[0.65rem] mb-[0.7rem]`}>
              <p
                className={`font-jetbrains-mono text-[0.7rem] tracking-[0.22em] uppercase text-(--accent-dim)`}
              >
                {number} · {t("projects.projects")}
              </p>
            </div>
            <h2
              className={`font-jetbrains-mono text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold text-(--text-primary)
                leading-[1.05] tracking-tight`}
            >
              {t("projects.title1")}{" "}
              <span
                className={`text-(--accent) italic text-shadow-[0_0_45px_var(--accent-glow)]`}
              >
                {t("projects.title2")}
              </span>
            </h2>
          </motion.div>
        </div>

        <div
          className={`h-px bg-[linear-gradient(to_right,var(--border-accent),var(--border)_60%,transparent)]`}
        />

        <div onMouseLeave={() => setHoveredId(null)}>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onHover={setHoveredId}
              onLeave={() => setHoveredId(null)}
              isAnyHovered={hoveredId !== null}
              isThisHovered={hoveredId === project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
