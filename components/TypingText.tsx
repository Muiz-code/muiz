"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <p className="text-lg md:text-2xl text-gray-400 mt-4  md:w-2xl text-center leading-8">
      <Typewriter
        words={[
          "I build interactive, accessible interfaces that blend design and code—where animation, performance, and precision meet to create meaningful digital experiences.",
        ]}
        loop={1}
        cursor
        typeSpeed={40}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </p>
  );
}
