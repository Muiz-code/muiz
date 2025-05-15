"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaReact,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

// Social links
const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/Muiz-code",
    icon: <FaGithub className="text-[18px]" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muiz-owolabi-77a9aa147/",
    icon: <FaLinkedinIn className="text-[18px]" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/callme_muiz",
    icon: <FaTwitter className="text-[18px]" />,
  },
];

// Skill icons (tooltips only)
const skillIcons = [
  { name: "HTML5", icon: <FaHtml5 className="text-[18px]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[18px]" /> },
  { name: "React", icon: <FaReact className="text-[18px]" /> },
  { name: "React Native", icon: <FaReact className="text-[18px]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[18px]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[18px]" /> },
  { name: "Python", icon: <FaPython className="text-[18px]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[18px]" /> },
  { name: "CSS3", icon: <FaCss3 className="text-[18px]" /> },
];

const Socials = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full px-4">
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888787] hover:text-chart-2 transition-all duration-200 hover:scale-110 border border-chart-2 rounded-full p-2"
            title={social.name}
          >
            {social.icon}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-10 bg-chart-2" />
      <div className="block md:hidden w-1/2 border-t border-chart-2 my-4" />

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-4">
        {skillIcons.map((skill) => (
          <div
            key={skill.name}
            className="text-[#888787] hover:text-chart-2 transition-all duration-200 hover:scale-110 border border-chart-2 rounded-full p-2"
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
