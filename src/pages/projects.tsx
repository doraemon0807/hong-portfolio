import ProjectDetail from "@/components/projectDetail";
import { projectList } from "@/lib/projectList";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import disableScroll from "disable-scroll";
import ProjectThumb from "@/components/projectThumb";

export default function Projects() {
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
    <div className="w-full min-h-screen py-20 select-none">
      <div className="flex flex-col items-center relative">
        <h1 className="title mb-24">Projects</h1>
        <div className="grid grid-cols-3 gap-20">
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
