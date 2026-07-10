/** @format */

import { useTranslation } from "react-i18next";

export function getNavLinks() {
  const { t } = useTranslation();

  return [
    { label: t("navlinks.home"), href: "#hero" },
    { label: t("navlinks.experience"), href: "#experience" },
    { label: t("navlinks.techstack"), href: "#techstack" },
    { label: t("navlinks.projects"), href: "#projects" },
    { label: t("navlinks.contact"), href: "#contact" },
  ];
}
