/** @format */

import { useTranslation } from "react-i18next";

/** @format */

export function getEducationData() {
  const { t } = useTranslation();

  return [
    {
      degree: t("education_data.step1.degree"),
      specialization: t("education_data.step1.specialization"),
      period: t("education_data.step1.period"),
      gpa: "4.8 / 5.0",
      institution: t("education_data.step1.institution"),
      location: t("education_data.step1.location"),
      note: t("education_data.step1.note"),
      active: false,
    },
    {
      degree: t("education_data.step2.degree"),
      specialization: t("education_data.step2.specialization"),
      period: t("education_data.step2.period"),
      gpa: "87.0 / 100",
      institution: t("education_data.step2.institution"),
      location: t("education_data.step2.location"),
      note: t("education_data.step2.note"),
      active: true,
    },
  ];
}
