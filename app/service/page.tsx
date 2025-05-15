"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = () => [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and high-performance websites using React, Next.js, and modern CSS frameworks.",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native (CLI & Expo).",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
  {
    num: "03",
    title: "UI Component Engineering",
    description:
      "Designing and developing reusable UI components for web and mobile platforms.",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
  {
    num: "04",
    title: "UI/UX Design Implementation",
    description:
      "Translating clean UX designs into functional, pixel-perfect interfaces.",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
  {
    num: "05",
    title: "Performance Optimization",
    description:
      "Improving load time and responsiveness with optimization techniques.",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
  {
    num: "06",
    title: "Technical Training & Mentorship",
    description:
      "Training students and junior developers in frontend technologies and best practices.",
    icon: <BsArrowDownRight />,
    href: "/projects",
  },
];

const Service = () => {
  return (
    <section className="flex flex-col justify-center py-12 md:py-0 min-h-[80vh] ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[60px]"
        >
          {services().map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-6 justify-center group px-0 md:px-10"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-chart-2 transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] bg-white group-hover:bg-chart-2 transition-all duration-500 flex justify-center items-center hover:-rotate-45 rounded-full text-black text-sm"
                  >
                    {service.icon}
                  </Link>
                </div>
                <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-chart-2 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
