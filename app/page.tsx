import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import TypingText from "@/components/TypingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-[85vh] md:h-[80vh] px-4 flex flex-col justify-between items-center mt-[100px]">
      <div>
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-col gap-2 md:gap-8 w-full justify-center items-center">
            <h1 className="text-[30px] font-semibold text-white flex flex-col items-center gap-2">
              Hello I’m <br />{" "}
              <span className="text-chart-2 text-[50px] uppercase">
                Muiz Owolabi
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mt-2">
              Frontend Developer
            </p>
            <div>
              <TypingText />
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4 mt-2">
              <Link href="/public/Owolabi-Muiz-Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <FiDownload />
                  Download Resume
                </Button>
              </Link>
              <div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
