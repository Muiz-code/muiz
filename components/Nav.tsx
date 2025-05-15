"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
const NavLink = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-xl font-medium ${
        isActive
          ? "text-chart-2 border-b-2 border-chart-2"
          : "text-white capitalize font-medium hover:text-chart-2 transition-all duration-200"
      }`}
    >
      {name}
    </Link>
  );
};
const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink name={link.name} href={link.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
