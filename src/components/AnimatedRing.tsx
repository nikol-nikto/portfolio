/** @format */

import { useEffect, useRef, useState } from "react";
import { generateDash, lerp } from "../helpers/AnimatedRingHelpers";
import RingSVG from "../assets/svg/ring.svg";

interface AnimatedRingProps {
  isHovered: boolean;
  isPulsing: boolean;
}

function AnimatedRing({ isHovered, isPulsing }: AnimatedRingProps) {
  const SEGMENTS = 6;

  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const current = useRef<number[]>(generateDash(SEGMENTS));
  const target = useRef<number[]>(generateDash(SEGMENTS));

  const [, forceRender] = useState(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setRotation((prev) => prev + 0.25);

      current.current = current.current.map((v, i) =>
        lerp(v, target.current[i], 0.05),
      );

      forceRender((v) => v + 1);

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      target.current = generateDash(SEGMENTS);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setScale(isHovered ? 1.06 : 1);
  }, [isHovered]);

  useEffect(() => {
    if (isPulsing) {
      setScale(0.92);
      setTimeout(() => setScale(1.06), 200);
    }
  }, [isPulsing]);

  const dash = current.current.join(" ");

  return (
    <RingSVG
      color="transparent"
      scale={scale}
      dash={dash}
      rotation={rotation}
    />
  );
}

export default AnimatedRing;
