/** @format */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GlobeSvg from "../assets/svg/globe.svg.tsx";
import USFlag from "../assets/image/us_flag.png";
import RUFlag from "../assets/image/ru_flag.png";
import JPFlag from "../assets/image/jp_flag.png";
import i18n from "../locales/i18n";

interface LanguageSelectorProps {
  selectedLanguage: string;
  setSelectedLanguage: Function;
}

const languages = [
  { code: "EN", label: "English", flag: USFlag },
  { code: "RU", label: "Русский", flag: RUFlag },
  { code: "JP", label: "日本語", flag: JPFlag },
];

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageSelectorProps) {
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsSelectOpened(!isSelectOpened)}
        className="flex items-center gap-3 px-4 py-2 font-bold text-lg bg-emerald-400 text-black rounded-full"
      >
        <GlobeSvg width={16} height={16} />
        {selectedLanguage}
        <span className="text-lg">▾</span>
      </button>

      <AnimatePresence>
        {isSelectOpened && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-40 bg-[#0f0f17] border border-emerald-400 rounded-xl p-3 shadow-lg"
          >
            <p className="text-xs text-gray-400 mb-2">Language</p>

            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language.label);
                  i18n.changeLanguage(language.code);

                  setIsSelectOpened(false);
                }}
                className="flex items-center justify-between w-full px-2 py-2 rounded-md hover:bg-white/5 transition"
              >
                <span className="flex items-center gap-3">
                  <img
                    src={language.flag}
                    alt="img"
                    className="h-4 w-4 bg-contain bg-no-repeat"
                  />
                  {language.label}
                </span>

                {selectedLanguage === language.code && (
                  <span className="text-emerald-400">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;
