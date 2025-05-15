"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, label: "Years of experience" },
  { num: 10, label: "Projects" },
  { num: 6, label: "Technologies Mastered" },
  { num: 400, label: "Codes commits" },
];

const Stats = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center xl:justify-start gap-4 w-[100%]"
              >
                <h1 className="text-4xl md:text-6xl font-semibold text-chart-2">
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                </h1>
                <p
                  className={`${
                    stat.label.length < 15 ? "max-w-[100px] " : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
