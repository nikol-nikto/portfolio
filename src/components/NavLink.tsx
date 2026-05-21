/** @format */

import { motion } from "framer-motion";
import { useState } from "react";

interface NavLinkProps {
  label: string;
  href: string;
  styles?: string;
}

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavLink({ label, href, styles }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollTo(href);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`font-jetbrains-mono text-[0.75rem] tracking-widest uppercase no-underline relative pb-0.75
        transition-[color_0.22s_ease] ${hovered ? "text-[#00ff99]" : "text-[rgba(255,255,255,0.5)]"}
        ${styles}`}
    >
      {label}
      <motion.span
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute bottom-0 left-0 right-0 h-px bg-[#00ff99] block
            ${hovered ? "origin-left" : "origin-right"}`}
      />
    </a>
  );
}

export default NavLink;
