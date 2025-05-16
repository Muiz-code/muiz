"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-3 md:py-6 text-white fixed top-0 left-0 right-0 z-10 px-2 md:px-[180px] transition-all duration-300 ${
        scrolled ? "bg-[#151515]/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Muiz<span className="text-chart-2">.</span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button variant="default">Hire Me</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
