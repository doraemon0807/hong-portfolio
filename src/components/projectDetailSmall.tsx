import { motion } from "framer-motion";
import Image from "next/image";
import { cls } from "@/lib/utils";
import Button from "@/components/button";

interface ProjectDetailSmallProps {
  id: string;
  counter: number;
  project:
    | {
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
      }
    | undefined;
  className?: string;
}

export default function ProjectDetailSmall({
  id,
  counter,
  project,
  className,
}: ProjectDetailSmallProps) {
  return (
    <motion.div
      layoutId={id}
      className={cls(
        "w-4/5 h-3/4 space-x-10 bg-dark border-2 grid grid-rows-[11fr_1fr_10fr] border-gray-700/50 shadow-md shadow-gray-700 fixed left-0 right-0 top-12 bottom-0 m-auto rounded-md p-5",
        className ? className : ""
      )}
    >
      <div className="relative flex justify-center items-center">
        {project?.images.map((image, idx) => (
          <Image
            alt=""
            src={`/projects/${image}`}
            key={image}
            width={1000}
            height={1000}
            quality={100}
            className={cls(
              "rounded-sm absolute top-0 min-h-[330px] max-w-[550px] w-full aspect-[8/5] flex justify-center items-center transition-all duration-1000",
              counter - 1 === idx ? "opacity-1" : "opacity-0"
            )}
          ></Image>
        ))}
      </div>
      <div className="flex justify-center space-x-10 mt-4">
        {project?.images.map((image, idx) => (
          <div
            key={idx}
            className="w-4 h-4 rounded-full transition-all bg-gray-500 flex justify-center items-center"
          >
            <div
              className={cls(
                "w-4 h-4 rounded-full transition-all bg-gray-100 ring-1 ring-gray-100",
                counter - 1 === idx ? "scale-100" : "scale-0"
              )}
            ></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
