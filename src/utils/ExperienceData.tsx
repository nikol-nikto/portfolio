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
      company: "",
      location: t("experience_data.job1.location"),
      type: t("experience_data.job1.type"),
      tasks: [
        t("experience_data.job1.tasks.task1"),
        t("experience_data.job1.tasks.task2"),
        t("experience_data.job1.tasks.task3"),
        t("experience_data.job1.tasks.task4"),
        t("experience_data.job1.tasks.task5"),
      ],
      tags: ["React", "TypeScript", "MobX", "CSS Modules"],
    },
    {
      id: "fe-junior",
      period: t("experience_data.job2.period"),
      dateRange: t("experience_data.job2.dateRange"),
      title: t("experience_data.job2.title"),
      company: "",
      location: t("experience_data.job2.location"),
      type: t("experience_data.job2.type"),
      tasks: [
        t("experience_data.job2.tasks.task1"),
        t("experience_data.job2.tasks.task2"),
        t("experience_data.job2.tasks.task3"),
        t("experience_data.job2.tasks.task4"),
        t("experience_data.job2.tasks.task5"),
        t("experience_data.job2.tasks.task6"),
        t("experience_data.job2.tasks.task7"),
      ],
      tags: [
        "React",
        "TypeScript",
        "MobX",
        "REST API",
        "TailwindCSS",
        "Vitest",
      ],
    },
  ];
}
