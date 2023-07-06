import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
    latest > 50 ? navAnimation.start("scroll") : navAnimation.start("top");
  });

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
        className="w-full h-20 flex fixed pt-16 pb-10 px-32 z-50 bg-red-900 justify-between text-white"
      >
        <div className="text-xl font-bold">Ys</div>
        <div className="flex space-x-10 text-xs uppercase tracking-[6px] font-medium">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </motion.nav>
      <div className="px-32 space-y-10 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
