import ProjectDetail from "@/components/projectDetail";
import { projectList } from "@/lib/projectList";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [id, setId] = useState<null | string>(null);

  const overlayVariants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    animate: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    exit: {
      backgroundColor: "rgba(0,0,0,0)",
    },
  };

  return (
    <div className="w-full min-h-screen py-20 select-none">
      <div className="flex flex-col items-center relative">
        <h1 className="title mb-24">Projects</h1>
        <div className="grid grid-cols-3 gap-20">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setId(project.id)}
              layoutId={project.id}
              className="w-60 h-80 bg-red-900 rounded-md"
            >
              {project.title}
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {id ? (
            <motion.div
              onClick={() => setId(null)}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              variants={overlayVariants}
              className="w-screen h-full absolute"
            >
              <ProjectDetail id={id} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
