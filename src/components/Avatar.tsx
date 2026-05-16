/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AnimatedRingSvg from "../components/AnimatedRing.tsx";

import img1 from "../assets/image/toothless.jpg";
import img2 from "../assets/image/happy_dog.png";
import img3 from "../assets/image/photo_coming_soon.png";

function Avatar() {
  const { t } = useTranslation();

  const slides = [
    { img: img1, text: t("hero.avatar.img1") },
    { img: img2, text: t("hero.avatar.img2") },
    { img: img3, text: t("hero.avatar.img3") },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [imageFaded, setImageFaded] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 150);

    setImageFaded(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
      setImageFaded(false);
    }, 250);
  };

  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-75 h-75 xl:w-112.5 xl:h-112.5 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`absolute -inset-12 rounded-full pointer-events-none
          bg-[radial-gradient(closest-side,rgba(0,255,153,0.4),transparent)]`}
      />

      <AnimatedRingSvg isHovered={isHovered} isPulsing={isPulsing} />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
        <img
          key={currentImage}
          src={slides[currentImage].img}
          className={`
            w-[95%] h-[95%] object-cover rounded-full
            transition-all duration-300 animate-[rotatedFadeIn_ease_0.5s_forwards]
            ${imageFaded ? "animate-[rotatedFadeOut_ease_0.5s_forwards]" : ""}
          `}
        />
      </div>

      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2
          px-4 py-2 rounded-full bg-black/60 backdrop-blur
          text-xs lg:text-sm text-white font-mono
          transition-all duration-400
          ${
            isHovered
              ? "opacity-100 translate-y-0 animate-[fadeIn_ease_0.5s_forwards]"
              : "opacity-0 translate-y-3 animate-[fadeOut_ease_0.5s_forwards]"
          }
          ${imageFaded ? "animate-[fadeOut_ease_0.5s_forwards]" : ""}
        `}
      >
        {slides[currentImage].text}
      </div>
    </motion.div>
  );
}

export default Avatar;
