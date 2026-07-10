/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

function CVSelector() {
  const { t } = useTranslation();
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const CVs = [
    { label: t("hero.view_CV.english_CV"), href: "/resume/my-resume-en.pdf" },
    { label: t("hero.view_CV.russian_CV"), href: "/resume/my-resume-ru.pdf" },
    { label: t("hero.view_CV.japanese_CV"), href: "/resume/my-resume-en.pdf" },
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsSelectOpened((prev) => !prev)}
        className={`
          inline-flex items-center gap-1.5 px-6 py-2.5 border-[1.5px] border-[#00ff99]
          text-[#00ff99] font-bold text-xs tracking-[0.12em] uppercase rounded
          transition-all duration-200 bg-transparent
          hover:shadow-[0_0_18px_rgba(0,255,153,0.3)]
          hover:bg-[#00ff99] hover:text-black
        `}
      >
        {t("hero.view_CV.button_title")}
        <span className="text-xs">▸</span>
      </button>

      <AnimatePresence>
        {isSelectOpened && (
          <motion.div
            initial={{ opacity: 0, y: -190, scale: 0.95 }}
            animate={{ opacity: 1, y: -200, scale: 1 }}
            exit={{ opacity: 0, y: -190, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-3 min-w-44 bg-[#0f0f17] border border-[#00ff99]
              rounded-xl p-2 shadow-lg z-50 text-start"
          >
            <p className="text-xs text-gray-400 px-2 py-1">
              {t("hero.view_CV.modal_title")}
            </p>

            {CVs.map((cv) => (
              <a
                key={cv.label}
                href={cv.href}
                target="_blank"
                className="block px-4 py-1 rounded-md hover:bg-white/5 transition"
              >
                {cv.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CVSelector;
