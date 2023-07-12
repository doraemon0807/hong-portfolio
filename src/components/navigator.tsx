import HeaderLink from "@/components/headerLink";
import Logo from "@/components/logo";
import { motion } from "framer-motion";
import { useAnimation, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navigator() {
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

  return (
    <motion.nav
      variants={navVariant}
      initial={"top"}
      animate={navAnimation}
      className="select-none w-full h-20 flex fixed pt-20 pb-12 md:px-32 -md:px-10 -md:justify-center z-30 justify-between items-center text-white"
    >
      <Logo />
      <div className="-sm:tracking-widest flex md:space-x-10 -md:justify-evenly text-xs -md:w-full uppercase tracking-[6px] font-medium">
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
  );
}
