/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "WebApp",
    title: "The Lagos Wellness Club",
    description:
      "Where Lagos comes to live well. We test the routines, explore the tools, and host the experiences, so you only engage with what truly nourishes you. At TLWC, we're building a community of curious, conscious Lagosians who believe wellness should be intentional, sustainable, and part of everyday life.",
    image:
      "https://res.cloudinary.com/dhhvxjczm/video/upload/v1763650890/Recording_2025-09-23_095534_a1d3yq.mp4",
    github: "",
    live: "https://www.thelagoswellnessclub.com",
    stack: [
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Godaddy" },
      { name: "Vercel" },
      { name: "firebase" },
      { name: "React hooks" },
    ],
  },
  {
    num: "02",
    category: "WebApp",
    title: "Those Who Dine",
    description:
      "Those Who Dine is an events agency specialising in exclusive supper clubs and curated dining experiences. We craft immersive, themed gatherings and plan bespoke dinner events, blending exceptional cuisine, ambiance, and hospitality. Whether joining our signature supper clubs or hosting your own event, we create unforgettable moments over great food and conversation.",
    image:
      "https://res.cloudinary.com/dhhvxjczm/video/upload/v1763651583/TWD_e5pwur.mp4",
    github: "",
    live: "https://www.thosewhodine.co",
    stack: [
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Godaddy" },
      { name: "Vercel" },
      { name: "firebase" },
      { name: "React hooks" },
    ],
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Food Ordering WebApp",
    description:
      "A React app that helps you avoid market stress and get raw food material directly at your door step N.B: Available only in a particular location.",
    image: "/assets/gif/Bamdolod.gif",
    github: "https://github.com/Muiz-code/Bamdo_Lod",
    live: "https://bamdolod.vercel.app/",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Paystack" },
      { name: "Tailwind" },
    ],
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Tukay",
    description:
      " A fintech platform using React.js, Material UI, and Tailwind CSS, integrating a secure payment gateway and designing a user-friendly interface with animations for an enhanced experience.",
    image: "/assets/gif/Tukay.gif",
    github: "https://github.com/Muiz-code/TukayNewDesign",
    live: "https://tukay-taupe.vercel.app/",
    stack: [
      { name: "React" },
      { name: "Javascript" },
      { name: "Paystack" },
      { name: "Tailwind" },
      { name: "Firebase" },
      { name: "Paystack" },
      { name: "Material Ui" },
    ],
  },
  {
    num: "05",
    category: "Fullstack",
    title: "BFCS",
    description:
      "A responsive and user-friendly webapp for BFCS Laundry, implementing modern web technologies to improve user experience and service accessibility. The website featured intuitive navigation, service booking functionality, and seamless design to enhance customer engagement",
    image: "/assets/gif/BFCs.gif",
    github: "https://github.com/Muiz-code/BFCS",
    live: "https://BFCS.uk",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "AOS" },
    ],
  },
  {
    num: "06",
    category: "Frontend",
    title: "Fashion Site",
    description:
      " A React app that helps you to follow up and get latest clothing brands, this was an hackathon which i won.",
    image: "/assets/fashionShoppingSite.jpeg",
    github: "",
    live: "https://myfashion-shopping.netlify.app/",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "AOS" },
    ],
  },
  {
    num: "07",
    category: "FullStack",
    title: "Mobile Housing",
    description: " brands, this was an hackathon which i won.",
    image: "/assets/gif/Shortlet.gif",
    github: "https://github.com/Muiz-code/ShortLet-site",
    live: "https://short-let-site.vercel.app/",
    stack: [
      { name: "React" },
      { name: "Javascript" },
      { name: "Tailwind" },
      { name: "AOS" },
      { name: "Firebase" },
      { name: "Formspere" },
    ],
  },
  {
    num: "08",
    category: "FullStack",
    title: "Nidle Fashion Site",
    description:
      "Developed a  react app that helps you to follow up and get latest clothing brands.",
    image: "/assets/gif/Nidle.gif",
    github: "https://github.com/Muiz-code/GOYA-E-commerce",
    live: "https://e-comerce-fashionsite.netlify.app/",
    stack: [{ name: "React" }, { name: "Javascript" }, { name: "Tailwind" }],
  },
  {
    num: "09",
    category: "Frontend",
    title: "Amway",
    description:
      "Developed a  react app that helps you to follow up and get latest clothing brands.",
    image: "/assets/gif/Amway.gif",
    github: "https://github.com/Muiz-code/Amway",
    live: "https://amway-pi.vercel.app/",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind" }],
  },
  {
    num: "10",
    category: "FullStack",
    title: "Aparte",
    description:
      "Aparte is a mobile application designed to solve the hassle and stress of finding a place to stay. It connects users with available shortlet properties, allowing them to book accommodations conveniently.",
    image: "/assets/gif/Aparte.gif",
    github: "https://github.com/0xxeugene/Aparte",
    live: "",
    stack: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Css3" },
      { name: "Tailwind" },
      { name: "Firebase" },
      { name: "google geolocation" },
    ],
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-chart-2 transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className="text-[35px] font-bold leading-none text-white group-hover:text-chart-2 transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              <p className="text-white/60">{project.description}</p>

              <ul className="gap-4 grid md:grid-cols-4 grid-cols-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-chart-2">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group cursor-pointer">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-chart-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group cursor-pointer">
                        <BsGithub className="text-white text-3xl group-hover:text-chart-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                const isVideo =
                  project.image.includes(".mp4") ||
                  project.image.includes(".webm");

                return (
                  <SwiperSlide key={index} className="w-full">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="block h-[460px] relative group"
                    >
                      <div className="h-full flex justify-center items-center bg-black">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          {isVideo ? (
                            <video
                              src={project.image}
                              className="w-full h-full object-contain pointer-events-none select-none"
                              autoPlay
                              loop
                              muted
                              playsInline
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          ) : (
                            <Image
                              src={project.image}
                              fill
                              className="w-full object-contain pointer-events-none select-none"
                              alt={project.title}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
      xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-chart-2 text-black text-[22px] w-[44px] h-[44px] 
      flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
