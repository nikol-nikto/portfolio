/** @format */

interface Job {
  id: string;
  period: string;
  dateRange: string;
  title: string;
  company: string;
  location: string;
  // type: "Internship" | "Full-time";
  type: string;
  tasks: string[];
  tags: string[];
}

export type { Job };
