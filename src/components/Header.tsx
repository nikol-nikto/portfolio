/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  selectedLanguage: string;
  setSelectedLanguage: Function;
}

function Header({ selectedLanguage, setSelectedLanguage }: HeaderProps) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const handleReload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 10);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-0.75 w-full bg-[#00ff99] z-50"
          />
        )}
      </AnimatePresence>

      <header
        className={`w-full z-10 py-8 px-6 lg:px-0 max-w-7xl flex items-center
        justify-between absolute top-0 left-1/2 transform -translate-x-1/2`}
      >
        <div
          onClick={handleReload}
          className="text-2xl lg:text-3xl font-semibold flex items-center gap-2"
        >
          Kasumova S.
          <span className="w-2 h-2 bg-[#00ff99] rounded-full" />
        </div>

        <div className="items-center gap-8 hidden lg:flex">
          <nav className="flex gap-6 text-lg">
            <a
              href="#home"
              onClick={handleReload}
              className="text-[#00ff99] border-b border-[#00ff99]"
            >
              {t("header.home")}
            </a>
            <a href="#contact" className="hover:text-[#00ff99] transition">
              {t("header.contact")}
            </a>
          </nav>

          <LanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
