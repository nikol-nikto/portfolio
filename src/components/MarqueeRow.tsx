/** @format */

import { motion } from "framer-motion";
import type { techs } from "../utils/Techs";
import TechCard from "./TechCard";

function MarqueeRow({
  items,
  direction,
  speed = 35,
}: {
  items: typeof techs;
  direction: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items];
  const totalWidth = items.length * 106;

  return (
    <div
      className={`overflow-hidden relative w-full
        mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]`}
    >
      <motion.div
        className={`flex w-max gap-1`}
        animate={{
          x:
            direction === "left"
              ? [`0px`, `-${totalWidth}px`]
              : [`-${totalWidth}px`, `0px`],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.label}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

export default MarqueeRow;
