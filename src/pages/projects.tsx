import ProjectDetail from "@/components/projectDetail";
import { projectList } from "@/lib/projectList";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectThumb from "@/components/projectThumb";
import { BoxProps } from "@/pages";
import { cls, useScrollLock } from "@/lib/utils";

export interface ProjectProps {
  project?: {
    id: string;
    title: string;
    features: string[];
    packages: {
      name: string;
      image: string;
    }[];
    coverImage: string;
    images: string[];
    deployments: string[];
    github: string;
    link: string;
  };
}

export default function Projects({ isInView }: BoxProps) {
  const [id, setId] = useState<null | string>(null);

  const overlayVariants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    animate: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    exit: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const detail = document.getElementById("projectDetail");
    const body = document.body;

    id ? lockScroll(detail, body) : unlockScroll(detail, body);
  }, [id, lockScroll, unlockScroll]);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      e.key === "Escape" ? setId(null) : null;
    });
  }, []);

  return (
    <div id="projectsBox" className="w-full min-h-screen py-20 select-none">
      <div className="flex flex-col items-center relative mb-20">
        <h1
          className={cls(
            "title my-24 transition-all duration-1000",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          Projects
        </h1>
        <div id="projectsAnchor"></div>
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
                className="w-screen h-[200%] z-40 absolute"
              ></motion.div>
              <ProjectDetail id={id} />
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
