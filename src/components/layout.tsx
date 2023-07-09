import HeaderLink from "@/components/headerLink";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const refresh = () => {
    router.push("/");
  };

  return (
    <div className="w-screen h-screen">
      <div className="bg-dark fixed -z-10 w-screen h-screen"></div>
      <motion.nav
        variants={navVariant}
        initial={"top"}
        animate={navAnimation}
        className="select-none w-full h-20 flex fixed pt-20 pb-12 px-32 z-50 justify-between items-center text-white"
      >
        <div
          onClick={refresh}
          className="cursor-pointer text-5xl font-Lobster drop-shadow-[2px_2px_1px_rgba(180,180,180,0.8)]"
        >
          Ys
        </div>
        <div className="flex space-x-10 text-xs uppercase tracking-[6px] font-medium">
          <HeaderLink location={"homeAnchor"} target={"homeBox"}>
            Home
          </HeaderLink>
          <HeaderLink location={"aboutAnchor"} target={"aboutBox"}>
            About
          </HeaderLink>
          <HeaderLink location={"projectsAnchor"} target={"projectsBox"}>
            Projects
          </HeaderLink>
          <HeaderLink location={"contactAnchor"} target={"contactBox"}>
            Contact
          </HeaderLink>
        </div>
      </motion.nav>
      <div className="px-32 space-y-20 text-white z-10 divide-y-2">
        {children}
      </div>
    </div>
  );
}
