/** @format */

import { useTranslation } from "react-i18next";
import { socials } from "../utils/Socials";
import Avatar from "./Avatar";
import CVSelector from "./CVSelector";

function Hero({ selectedLanguage }: { selectedLanguage: string }) {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-start justify-center text-white px-6 pt-25 lg:pt-40"
    >
      <div
        className={`absolute inset-0 pointer-events-none bg-size-[80px_80px]
        bg-[linear-gradient(rgba(0,255,153,0.035)_3px,transparent_3px),linear-gradient(90deg,rgba(0,255,153,0.035)_3px,transparent_3px)]
        [maskImage:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]
        [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]`}
      />

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 items-center max-w-6xl w-full">
        <div className="flex flex-col text-center lg:text-left lg:justify-start">
          <p className="text-sm lg:text-base text-gray-400 mb-4 animate-[fadeUp_1s_ease_0.5s_forwards] opacity-0">
            {t("hero.role")}
          </p>

          <div className="font-bold animate-[fadeUp_1s_ease_0.7s_forwards] opacity-0">
            <div className="relative inline-block group">
              <span
                className={`relative z-10 transition-colors duration-300 group-hover:text-black
                  ${
                    selectedLanguage == "日本語"
                      ? "text-3xl lg:text-6xl"
                      : "text-5xl lg:text-8xl"
                  } whitespace-nowrap`}
              >
                {t("hero.greeting")}
              </span>

              <div
                className={`absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-500 origin-left rounded`}
              />
            </div>

            <br />

            <div className="relative inline-block group">
              <span
                className={`text-[#00ff99] text-shadow-[0_0_45px_rgba(0,255,153,0.3)] text-5xl lg:text-8xl
                  relative z-10 transition-colors duration-300 group-hover:text-black`}
              >
                {t("hero.name")}
              </span>

              <br />

              <span
                className={`text-[#00ff99] text-shadow-[0_0_45px_rgba(0,255,153,0.3)] text-5xl lg:text-8xl
                  relative z-10 transition-colors duration-300 group-hover:text-black`}
              >
                {t("hero.surname")}
              </span>

              <div
                className={`absolute inset-0 bg-[#00ff99] transform scale-x-0
                  group-hover:scale-x-100 transition-transform duration-500 origin-left rounded`}
              />
            </div>
          </div>

          <p
            className={`text-sm lg:text-base mt-6 mx-6 lg:mx-0 text-gray-400 max-w-xs lg:max-w-md
              tracking-wide animate-[fadeUp_1s_ease_0.9s_forwards] opacity-0`}
          >
            {t("hero.bio")}
          </p>

          <div
            className={`flex flex-col lg:flex-row items-center gap-5 mt-8 flex-wrap
            animate-[fadeUp_1s_ease_1.1s_forwards] opacity-0`}
          >
            <CVSelector />

            <div className="flex gap-4.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className={`flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] transition-all
                    duration-200 border-[#00ff99] text-[#00ff99] hover:shadow-[0_0_18px_rgba(0,255,153,0.3)]
                    hover:bg-[#00ff99] hover:text-black`}
                  target="_blank"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-[fadeUp_1s_ease_1.1s_forwards] opacity-0">
          <Avatar />
        </div>
      </div>
    </section>
  );
}

export default Hero;
