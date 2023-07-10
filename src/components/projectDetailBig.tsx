import { motion } from "framer-motion";
import Image from "next/image";
import { cls } from "@/lib/utils";
import Button from "@/components/button";

interface ProjectDetailBigProps {
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

export default function ProjectDetailBig({
  id,
  counter,
  project,
  className,
}: ProjectDetailBigProps) {
  return (
    <motion.div
      id={"projectDetail"}
      layoutId={id}
      className={cls(
        "w-4/5 h-3/4 space-x-10 bg-dark border-2 border-gray-700/50 shadow-md shadow-gray-700 fixed left-0 right-0 top-12 bottom-0 m-auto rounded-md p-5 grid grid-cols-[6fr_3fr]",
        className ? className : ""
      )}
    >
      {/* Images */}
      <div className="grid grid-rows-[11fr_1fr] py-10">
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
                "rounded-sm absolute w-full max-w-[850px] aspect-[8/5] flex justify-center items-center transition-all duration-1000",
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
      </div>
      {/* Description */}
      <div className="tracking-widest flex flex-col min-w-[350px]">
        <div className="">
          <h1 className="text-2xl font-bold">{project?.title}</h1>
        </div>
        <div className="flex flex-col h-full py-4 justify-evenly">
          <div className="">
            <h5 className="lg-2 mb-2 tracking-[3px] uppercase text-sm">
              Feature
            </h5>
            <div className="flex flex-col">
              {project?.features.map((feature) => (
                <div key={feature}>{feature}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="lg-2 mb-2 tracking-[3px] uppercase text-sm">
              Package
            </h5>
            <div className="flex space-x-4">
              {project?.packages.map((pkg) => (
                <div className="max-w-[60px] min-w-[30px] p-[2px] aspect-square overflow-hidden bg-white rounded-full flex justify-center items-center">
                  <Image
                    src={`/icons/${pkg.image}`}
                    alt=""
                    key={pkg.name}
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="lg-2 mb-2 tracking-[3px] uppercase text-sm">
              Deployment
            </h5>
            {project?.deployments.map((deployment) => (
              <div key={deployment}>{deployment}</div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button text={"GitHub"} link={project?.github!} />
            <Button text={"Try Live"} link={project?.link!} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
