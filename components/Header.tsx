import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 md:py-12 text-white">
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
