import { projectList } from "@/lib/projectList";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  id: string;
}

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const selectedProject = projectList.find((project) => project.id === id);

  return (
    <motion.div
      layoutId={id}
      className="w-4/5 h-3/4 bg-red-200 fixed left-0 right-0 top-0 bottom-0 m-auto rounded-md p-5 grid grid-cols-[3fr_5fr]"
    >
      <div className="bg-blue-200"></div>
      <div className="bg-green-200"></div>
    </motion.div>
  );
}
