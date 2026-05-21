/** @format */

import { motion } from "framer-motion";
import { socials } from "../utils/Socials";
import { navLinks } from "../utils/NavLinks";
import NavLink from "./NavLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`bg-[linear-gradient(180deg,#0a0a0f_0%,#090a10_55%,#46474f_100%)] overflow-hidden
        px-[clamp(1.5rem,7vw,6rem)] relative mt-28`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "none" }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-275 w-full my-0 mx-auto grid grid-cols-[1fr_auto] gap-y-12 gap-x-16
          items-start relative z-1 py-[4.5rem_2.5rem]`}
      >
        <div>
          <div
            className={`font-jetbraains-mono font-bold leading-[0.88] mb-6 select-none`}
          >
            <div
              className={`text-[clamp(2rem,6.5vw,4.5rem)] text-[#b1b1b1] tracking-[-0.03em]
                before:absolute before:content-['Kasumova'] before:opacity-[0.5]
                before:filter-[blur(3.5px)] before:text-shadow-[gray_-10px_0_10px,gray_10px_0_10px]`}
            >
              Kasumova
            </div>
            <div
              className={`text-[clamp(2rem,6.5vw,4.5rem)] text-[#00ff99] tracking-[-0.03em] italic filter-[blur(2.5px)]
              opacity-[0.5] text-shadow-[0_0_60px_rgba(0,255,153,0.3)]
              before:absolute before:content-['Sabina'] before:opacity-[0.5]
              before:filter-[blur(3.5px)] before:text-shadow-[#00ff99_-10px_0_10px,#00ff99_10px_0_10px]`}
            >
              Sabina.
            </div>
          </div>

          <p
            className={`font-jetbrains-mono text-[0.72rem] tracking-[0.07em] text-[rgba(255,255,255,0.4)] font-light
            max-w-65 leading-[1.75]`}
          >
            Frontend Developer · Building interfaces that feel as good as they
            look.
          </p>
        </div>

        <nav
          className={`flex flex-wrap gap-y-[0.65rem] gap-x-10 justify-end pt-4`}
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} label={link.label} href={link.href} />
          ))}
        </nav>
      </motion.div>

      <div className={`max-w-275 w-full my-0 mx-auto relative z-1`}>
        <div
          className={`h-0.5
            bg-[linear-gradient(to_right,transparent,rgba(64,94,83,0.5)_25%,rgba(64,94,83,0.5)_75%,transparent)]`}
        />
      </div>

      <div
        className={`max-w-275 w-full my-0 mx-auto py-[1.25rem_2.25rem] flex align-middle justify-between flex-wrap
          gap-4 relative z-1`}
      >
        <p
          className={`font-jetbrains-mono text-[0.62rem] tracking-widest text-[rgba(255,255,255,0.4)]`}
        >
          © {year} Kasumova Sabina. All rights reserved.
        </p>

        <div className={`flex gap-[0.65rem] items-center`}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-8 h-8 rounded-[50%] border border-[rgba(255,255,255,0.28)]
                text-[rgba(255,255,255,0.28)] transition-all duration-[0.22s] ease-in-out no-underline`}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,255,153,0.5)";
                el.style.color = "#00ff99";
                el.style.boxShadow = "0 0 10px rgba(0,255,153,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.28)";
                el.style.color = "rgba(255,255,255,0.28)";
                el.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
