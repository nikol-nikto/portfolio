/** @format */

import { useTranslation } from "react-i18next";

export function getExperienceData() {
  const { t } = useTranslation();

  return [
    {
      id: "fe-intern",
      period: t("experience_data.job1.period"),
      dateRange: t("experience_data.job1.dateRange"),
      title: t("experience_data.job1.title"),
      company: "StoryCraft",
      location: t("experience_data.job1.location"),
      type: t("experience_data.job1.type"),
      tasks: [
        t("experience_data.job1.tasks.task1"),
        t("experience_data.job1.tasks.task2"),
        t("experience_data.job1.tasks.task3"),
        t("experience_data.job1.tasks.task4"),
        t("experience_data.job1.tasks.task5"),
        t("experience_data.job1.tasks.task6"),
      ],
      tags: ["React", "TypeScript", "MobX", "REST API", "Vitest"],
    },
  ];
}
