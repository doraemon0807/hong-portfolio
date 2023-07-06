import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Head from "next/head";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import { navLocationState } from "@/lib/atom";
import { useEffect, useRef } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const headText = `Yun's Portfolio`;

  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const navVariant = {
    top: {
      background:
        "linear-gradient(to bottom, rgba(100,100,100,0.8), transparent)",
      backgroundColor: "rgba(0,0,0,0)",
    },
    scroll: {
      background: "linear-gradient(to bottom, rgba(0,0,0,0), transparent)",
      backgroundColor: "rgba(0,0,0,0.9)",
    },
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 60 ? navAnimation.start("scroll") : navAnimation.start("top");
  });

  const [navLocation, setNavLocation] = useRecoilState(navLocationState);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      console.log(e[0]);
      if (e[0].isIntersecting) {
        setNavLocation(e[0].target.id);
      }
    });
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    home ? observer.observe(home) : null;
    about ? observer.observe(about) : null;
    projects ? observer.observe(projects) : null;
    contact ? observer.observe(contact) : null;
  }, []);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>{headText}</title>
      </Head>
      <div className="bg-dark fixed -z-10 w-screen h-screen"></div>
      <motion.nav
        variants={navVariant}
        initial={"top"}
        animate={navAnimation}
        className="w-full h-20 flex fixed pt-16 pb-16 px-32 z-50 bg-red-900 justify-between text-white"
      >
        <div className="text-xl font-bold">Ys</div>
        <div className="flex space-x-10 text-xs uppercase tracking-[6px] font-medium">
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            {navLocation === "home" ? (
              <div className="w-full min-h-[2px] -translate-x-[2px] bg-white/75" />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="aboutNav"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            {navLocation === "about" ? (
              <div className="w-full min-h-[2px] -translate-x-[2px] bg-white/75" />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="projectsNav"
              smooth={true}
              duration={500}
              offset={-120}
            >
              Projects
            </Link>
            {navLocation === "projects" ? (
              <div className="w-full min-h-[2px] -translate-x-[2px] bg-white/75" />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="contactNav"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
            {navLocation === "contact" ? (
              <div className="w-full min-h-[2px] -translate-x-[2px] bg-white/75" />
            ) : null}
          </div>
        </div>
      </motion.nav>
      <div className="px-32 space-y-10 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
