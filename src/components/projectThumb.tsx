import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ProjectThumbProps {
  project: {
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
  setId: Dispatch<SetStateAction<string | null>>;
}

export default function ProjectThumb({ project, setId }: ProjectThumbProps) {
  return (
    <motion.div
      key={project.id}
      onClick={() => setId(project.id)}
      layoutId={project.id}
      className="w-96 h-60 bg-red-900 box-content cursor-pointer relative"
    >
      <Image
        src={`/projects/${project.coverImage}`}
        alt=""
        width={1000}
        height={1000}
        className="w-full h-full rounded-md"
      />
      <div className="group tracking-widest duration-300 p-5 justify-start flex-col items-start flex w-full h-full opacity-0 hover:bg-dark/80 hover:opacity-100 transition-all absolute left-0 top-0">
        <h2 className="text-xl font-medium">{project.title}</h2>
        <div className="w-full h-full flex justify-center items-end">
          <div className="py-2 rounded-sm px-4 text-xs bg-dark/50 opacity-0 transition-all delay-500 group-hover:opacity-100 duration-500">
            Click to view detail
          </div>
        </div>
      </div>
    </motion.div>
  );
}
