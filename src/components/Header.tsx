/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";
// import ThemeToggle from "../assets/svg/themeToggle.svg";

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
            className={`fixed top-0 left-0 h-0.75 w-full z-50 bg-(--accent)`}
          />
        )}
      </AnimatePresence>

      <header
        className={`w-full z-10 py-8 px-6 lg:px-0 max-w-7xl flex items-center
        justify-between absolute top-0 left-1/2 transform -translate-x-1/2 text-(--text-primary)`}
      >
        <div
          onClick={handleReload}
          className={`text-2xl lg:text-3xl font-semibold flex items-center gap-2 cursor-pointer text-(--text-primary)`}
        >
          Kasumova S.
          <span className={`w-2 h-2 rounded-full bg-(--accent)`} />
        </div>

        <div className="items-center gap-5 hidden lg:flex">
          <nav className="flex gap-6 text-lg items-center">
            <div onClick={handleReload}>
              <NavLink
                key={"#hero"}
                label={t("header.home")}
                href={"#hero"}
                styles={`font-nunito`}
              />
            </div>
            <div>
              <NavLink
                key={"#contact"}
                label={t("header.contact")}
                href={"#contact"}
                styles={`font-nunito`}
              />
            </div>
          </nav>

          {/* <ThemeToggle /> */}

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
