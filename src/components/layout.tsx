import {
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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
              offset={-120}
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
      <div className="px-32 space-y-10 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
