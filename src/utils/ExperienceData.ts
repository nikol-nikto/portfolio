/** @format */

import type { Job } from "../types/ExperienceDataTypes";

export const experienceData = [
  {
    date: "Aug 2025 — Present",
    title: "Frontend Developer (Intern → Junior)",
    description: `
Worked as a frontend developer focusing on building modern web applications using React.

• Built reusable UI components with clean architecture  
• Worked with REST APIs (fetching, caching, error handling)  
• Used MobX for state management in scalable flows
• Collaborated with backend team on API contracts  
• Improved performance (memo, lazy loading, avoiding re-renders)  
• Participated in code reviews and refactoring  
• Fixed UI/UX issues and improved accessibility  
• Implemented responsive layouts across devices  
    `,
  },
];

export const JOBS: Job[] = [
  {
    id: "fe-intern",
    period: "Aug —\nSep 2025",
    dateRange: "Mid Aug 2025 – Sep 2025",
    title: "Frontend Developer Intern",
    company: "",
    location: "Remote · Russia",
    type: "Internship",
    tasks: [
      "Onboarded into a production React + TypeScript codebase; independently delivered my first feature within the first two weeks.",
      "Built reusable UI components — forms, modals, data tables — following the team's design system and accessibility guidelines.",
      "Connected components to live backend endpoints, handled loading/error states, and wrote request helpers with Axios.",
      "Introduced to MobX: implemented observable stores for local UI state and synced them with server responses.",
      "Participated in daily standups, sprint planning, and retrospectives — gained hands-on experience with Agile workflows.",
    ],
    tags: ["React", "TypeScript", "MobX", "CSS Modules"],
  },
  {
    id: "fe-junior",
    period: "Sep 2025 —\nPresent",
    dateRange: "Sep 2025 – Present",
    title: "Frontend Developer",
    company: "",
    location: "Remote · Russia",
    type: "Full-time",
    tasks: [
      "Promoted to Junior Frontend Developer after successful internship — took full ownership of several product features end-to-end.",
      "Architected and maintained scalable React component libraries used across multiple product surfaces, reducing duplication by ~35%.",
      "Integrated complex REST APIs: designed custom hooks for data-fetching, caching, and error boundaries to ensure resilient UX.",
      "Led state management with MobX — modelled domain stores, handled reactive side-effects, and optimised re-render performance.",
      "Collaborated directly with the design team to translate pixel-perfect Figma mockups into accessible, responsive interfaces.",
      "Conducted code reviews, introduced ESLint + Prettier standards, and wrote component-level tests with Vitest & Testing Library.",
    ],
    tags: ["React", "TypeScript", "MobX", "REST API", "TailwindCSS", "Vitest"],
  },
];
