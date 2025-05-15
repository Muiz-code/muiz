"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "home", href: "/" },
  { name: "service", href: "/service" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex items-center justify-center w-10 h-10 rounded-full bg-none text-white">
          <CiMenuFries className="text-chart-2 text-[30px]" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-[#151515] text-white fixed inset-y-0 right-0 w-[300px] h-screen z-[100]"
        >
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="text-4xl font-semibold">
                Muiz<span className="text-chart-2">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8 p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${
                  link.href === pathname &&
                  "text-chart-2 border-b-2 border-chart-2"
                } text-xl capitalize hover:text-chart-2 transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
