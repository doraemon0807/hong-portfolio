import ProjectDetail from "@/components/projectDetail";
import { projectList } from "@/lib/projectList";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import disableScroll from "disable-scroll";
import ProjectThumb from "@/components/projectThumb";
import { BoxProps } from "@/pages";
import { cls } from "@/lib/utils";

export default function Projects({ isInView }: BoxProps) {
  const [id, setId] = useState<null | string>(null);

  const overlayVariants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    animate: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    exit: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  useEffect(() => {
    id ? disableScroll.on() : disableScroll.off();
  }, [id]);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      e.key === "Escape" ? setId(null) : null;
    });
  }, []);

  return (
    <div id="projectsBox" className="w-full min-h-screen py-20 select-none">
      <div className="flex flex-col items-center relative mb-20">
        <h1
          id="projectsAnchor"
          className={cls(
            "title my-24 transition-all duration-1000",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          Projects
        </h1>
        <div
          className={cls(
            "grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 transition-all duration-1000 delay-300",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          {projectList.map((project) => (
            <ProjectThumb project={project} setId={setId} key={project.id} />
          ))}
        </div>
        <AnimatePresence>
          {id ? (
            <>
              <motion.div
                onClick={() => setId(null)}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                variants={overlayVariants}
                className="w-screen h-[200%] absolute"
              ></motion.div>
              <ProjectDetail id={id} />
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
