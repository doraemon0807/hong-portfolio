import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import { navLocationState } from "@/lib/atom";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const navVariant = {
    top: {
      background:
        "linear-gradient(to bottom, rgba(100,100,100,0.6), transparent)",
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
    const observer1 = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        setNavLocation(e[0].target.id);
      }
    });
    const homeAnchor = document.getElementById("homeAnchor");
    const aboutAnchor = document.getElementById("aboutAnchor");
    const projectsAnchor = document.getElementById("projectsAnchor");
    const contactAnchor = document.getElementById("contactAnchor");

    homeAnchor ? observer1.observe(homeAnchor) : null;
    aboutAnchor ? observer1.observe(aboutAnchor) : null;
    projectsAnchor ? observer1.observe(projectsAnchor) : null;
    contactAnchor ? observer1.observe(contactAnchor) : null;
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="bg-dark fixed -z-10 w-screen h-screen"></div>
      <motion.nav
        variants={navVariant}
        initial={"top"}
        animate={navAnimation}
        className="select-none w-full h-20 flex fixed pt-20 pb-12 px-32 z-50 justify-between items-center text-white"
      >
        <div className="text-5xl font-Lobster drop-shadow-[2px_2px_1px_rgba(180,180,180,0.8)]">
          Ys
        </div>
        <div className="flex space-x-10 text-xs uppercase tracking-[6px] font-medium">
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="homeBox"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            {navLocation === "homeAnchor" ? (
              <motion.div
                layoutId="underbar"
                className="w-full min-h-[2px] mr-[3px] bg-white/75"
              />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="aboutBox"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            {navLocation === "aboutAnchor" ? (
              <motion.div
                layoutId="underbar"
                className="w-full min-h-[2px] mr-[3px] bg-white/75"
              />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="projectsBox"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            {navLocation === "projectsAnchor" ? (
              <motion.div
                layoutId="underbar"
                className="w-full min-h-[2px] mr-[3px] bg-white/75"
              />
            ) : null}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link
              className="cursor-pointer"
              to="contactBox"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
            {navLocation === "contactAnchor" ? (
              <motion.div
                layoutId="underbar"
                className="w-full min-h-[2px] mr-[3px] bg-white/75"
              />
            ) : null}
          </div>
        </div>
      </motion.nav>
      <div className="px-32 space-y-20 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
