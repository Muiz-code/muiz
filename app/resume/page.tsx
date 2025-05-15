"use client";

import { title } from "process";
import {
  FaFigma,
  FaReact,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = [
  {
    title: "Name",
    description: "Muiz Owolabi",
    info: [
      { fieldName: "Name", fieldValue: "Muiz Owolabi" },
      {
        fieldName: "education",
        fieldValue: "3+ Years",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+234) 903 841 5909",
      },
      {
        fieldName: "Email",
        fieldValue: "hollarewajumuiz@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Language",
        fieldValue: "English",
      },
    ],
  },
];

const experience = {
  icon: "FaReact",
  title: "My Experience",
  description:
    "I have over 3 years of experience crafting responsive, user-focused web and mobile applications. I specialize in frontend development with React, Next.js, and Tailwind CSS, and I also build full-stack apps using ready-made APIs like Firebase for authentication and databases. Whether it's a polished UI or a fully functional product, I focus on delivering clean, performant, and scalable solutions.",
  items: [
    {
      company: "E-commerce Startup (Food Delivery)",
      position: "Full-Stack Developer",
      date: "2022 - 2023",
    },
    {
      company: "FMDQ",
      position: "Project Monitoring and Evaluation Intern",
      date: "2025",
    },
    {
      company: "Freelancing",
      position: "Frontend Developer",
      date: "2021 - Present",
    },
    {
      company: "Lotus Beta Analytics",
      position: "ERP Developer Internship",
      date: "2024 - 2025",
    },
    {
      company: "Lotus Beta Analytics",
      position: "Frontend Developer Internship",
      date: "2022 - 2023",
    },
    {
      company: "Malhub",
      position: "Frontend Developer Instructor",
      date: "2023 - 2024",
    },
  ],
};
const education = {
  icon: "FaReact",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Computer Science from the University of Lagos. I have also completed various online courses and certifications in web development and related technologies.",
  items: [
    {
      institution: "KWARA STATE UNIVERSITY",
      degree: "B.SC COMPUTER SCIENCE",
      duration: "2019 - 2023",
    },
    {
      institution: "MALHUB",
      degree: "FRONTEND DEVELOPMENT CERTIFICATION",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am proficient in various frontend technologies, including HTML, CSS, JavaScript, React, and Next.js. I also have experience with UI/UX design and responsive web development.",
  skillList: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 md:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6 ">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[50vh]">
            <TabsContent value={"experience"} className="w-full">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#27272c] py-3 px-10 h-[184px] rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                        >
                          <span className="text-chart-2">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-chart-2"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value={"education"} className="w-full">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#27272c] py-3 px-10 h-[184px] rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                        >
                          <span className="text-chart-2">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-chart-2"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value={"skills"} className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-chart-2 transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value={"about"} className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
