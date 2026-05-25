/** @format */

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Project data ─────────────────────────────────────────────────────────────
// Replace image paths with your actual screenshots
import proj1 from "../assets/image/toothless.jpg"; // placeholder — swap out
import proj2 from "../assets/image/happy_dog.png"; // placeholder — swap out
import proj3 from "../assets/image/photo_coming_soon.png"; // placeholder — swap out

const PROJECTS = [
  {
    id: "01",
    title: "Project Alpha",
    tags: ["React", "TypeScript", "TailwindCSS"],
    href: "https://github.com",
    image: proj1,
    year: "2025",
  },
  {
    id: "02",
    title: "Project Beta",
    tags: ["Vue 3", "Vite", "REST API"],
    href: "https://github.com",
    image: proj2,
    year: "2024",
  },
  {
    id: "03",
    title: "Project Gamma",
    tags: ["React", "MobX", "Flask"],
    href: "https://github.com",
    image: proj3,
    year: "2024",
  },
  {
    id: "04",
    title: "Project Delta",
    tags: ["Next.js", "Python", "SQLite"],
    href: "https://github.com",
    image: proj1,
    year: "2023",
  },
  {
    id: "05",
    title: "Project Epsilon",
    tags: ["React", "Sass", "Docker"],
    href: "https://github.com",
    image: proj2,
    year: "2023",
  },
];

// ─── External link icon ───────────────────────────────────────────────────────
function ExternalIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Single project row ───────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  onHover,
  onLeave,
  isAnyHovered,
  isThisHovered,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  onHover: (id: string) => void;
  onLeave: () => void;
  isAnyHovered: boolean;
  isThisHovered: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "1.6rem 0",
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {/* Number */}
        <motion.span
          animate={{
            color: isThisHovered
              ? "rgba(0,255,153,0.45)"
              : "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
            fontWeight: 400,
            flexShrink: 0,
            width: "2.5rem",
          }}
        >
          .{project.id}
        </motion.span>

        {/* Title */}
        <motion.h3
          animate={{
            color: isThisHovered
              ? "#00ff99"
              : isAnyHovered
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0.65)",
            textShadow: isThisHovered
              ? "0 0 40px rgba(0,255,153,0.35)"
              : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            flex: 1,
          }}
        >
          {project.title}
        </motion.h3>

        {/* Tags + year */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                animate={{
                  opacity: isThisHovered ? 1 : isAnyHovered ? 0.3 : 0.5,
                  color: isThisHovered ? "#00ff99" : "rgba(255,255,255,0.5)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: isThisHovered
                    ? "rgba(0,255,153,0.06)"
                    : "rgba(255,255,255,0.04)",
                  border: "1px solid",
                  borderColor: isThisHovered
                    ? "rgba(0,255,153,0.2)"
                    : "rgba(255,255,255,0.08)",
                  padding: "0.18rem 0.55rem",
                  borderRadius: "3px",
                  transition: "all 0.25s ease",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* External link icon */}
          <motion.span
            animate={{
              opacity: isThisHovered ? 1 : 0,
              x: isThisHovered ? 0 : -6,
              color: "#00ff99",
            }}
            transition={{ duration: 0.25 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ExternalIcon />
          </motion.span>
        </div>
      </motion.a>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Projects({ number }: { number: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const [imageY, setImageY] = useState(0);
  const prevMouseYRef = useRef(0);
  const imageYRef = useRef(0);
  const rafRef = useRef<number>(0);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  const hoveredProject = PROJECTS.find((p) => p.id === hoveredId);

  // Track mouse position within section for image parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const y = e.clientY - rect.top;
    const delta = y - prevMouseYRef.current;
    prevMouseYRef.current = y;
    setMouseY(y);

    // Drift image up/down based on scroll direction
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      imageYRef.current = Math.max(
        -40,
        Math.min(40, imageYRef.current + delta * 0.15),
      );
      setImageY(imageYRef.current);
    });
  }, []);

  // Decay image offset back to 0 when not moving
  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    imageYRef.current = 0;
    setImageY(0);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseMove={handleMouseMove}
      style={{
        // background: "linear-gradient(180deg, #0d0f1a 0%, #0a0c14 100%)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 7vw, 6rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,255,153,0.025) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,255,153,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hover image — floats on the right, follows mouse direction */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            key={hoveredProject.id}
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: imageY }}
            exit={{ opacity: 0, scale: 0.96, x: 10 }}
            transition={{
              opacity: { duration: 0.3, ease: "easeOut" },
              scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 0.15, ease: "linear" },
            }}
            style={{
              position: "fixed",
              right: "clamp(2rem, 6vw, 5rem)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "clamp(280px, 28vw, 420px)",
              aspectRatio: "16/10",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(0,255,153,0.2)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,153,0.08)",
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay with project name */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1rem 1.25rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#00ff99",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {hoveredProject.year} · {hoveredProject.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <div ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {/* ✳ asterisk like in template */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  color: "#00ff99",
                  fontSize: "1.2rem",
                  textShadow: "0 0 20px rgba(0,255,153,0.5)",
                }}
              >
                ✳
              </span>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(0,255,153,0.45)",
                }}
              >
                {number} · Projects
              </p>
            </div>

            <h2
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Selected{" "}
              <span
                style={{
                  color: "#00ff99",
                  fontStyle: "italic",
                  textShadow: "0 0 45px rgba(0,255,153,0.3)",
                }}
              >
                projects.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Top border */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, rgba(0,255,153,0.15), rgba(0,255,153,0.05) 60%, transparent)",
            marginBottom: "0",
          }}
        />

        {/* Project list */}
        <div onMouseLeave={handleMouseLeave}>
          {PROJECTS.map((project, i) => (
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
