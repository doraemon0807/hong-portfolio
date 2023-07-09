import { useRecoilState } from "recoil";
import { navLocationState } from "@/lib/atom";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  location: string;
  target: string;
  children: string;
}

export default function HeaderLink({
  children,
  location,
  target,
}: HeaderLinkProps) {
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
    <div className="flex flex-col items-center space-y-2">
      <Link className="cursor-pointer" to={target} smooth={true} duration={500}>
        {children}
      </Link>
      {navLocation === location ? (
        <motion.div
          layoutId="underbar"
          className="w-full min-h-[2px] mr-[3px] bg-white/75"
        />
      ) : null}
    </div>
  );
}
