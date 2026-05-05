/** @format */

import GitHubSVG from "../assets/svg/github.svg.tsx";
import LinkedInSVG from "../assets/svg/linkedIn.svg.tsx";
import TelegramSVG from "../assets/svg/telegram.svg.tsx";

export const Socials = [
  {
    label: "Telegram",
    href: "https://t.me/nn_ksg",
    icon: TelegramSVG({ color: "currentColor", width: 17, height: 17 }),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sabina-kasumova-514189310",
    icon: LinkedInSVG({ color: "currentColor", width: 17, height: 17 }),
  },
  {
    label: "GitHub",
    href: "https://github.com/nikol-nikto",
    icon: GitHubSVG({ color: "currentColor", width: 17, height: 17 }),
  },
];
