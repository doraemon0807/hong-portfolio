import Button from "@/components/button";
import { projectList } from "@/lib/projectList";
import { cls } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectDetailProps {
  id: string;
}

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const selectedProject = projectList.find((project) => project.id === id);

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const id = setInterval(
      () =>
        setCounter((oldCount) =>
          oldCount >= selectedProject?.images.length! ? 1 : oldCount + 1
        ),
      3000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <motion.div
      layoutId={id}
      className="w-4/5 h-3/4 bg-dark shadow-md shadow-gray-700 fixed left-0 right-0 top-0 bottom-0 m-auto rounded-md p-5 grid grid-cols-[4fr_3fr]"
    >
      {/* Images */}
      <div className="grid grid-rows-[7fr_1fr] ">
        <div className="relative">
          {selectedProject?.images.map((image, idx) => (
            <div
              key={image}
              className={cls(
                "rounded-sm absolute w-full h-full bg-blue-600 flex justify-center items-center transition-all",
                counter - 1 === idx ? "opacity-1" : "opacity-0"
              )}
            >
              <span>{image + counter}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-10 mt-4">
          {selectedProject?.images.map((image, idx) => (
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
      <div className="tracking-widest px-10 flex flex-col">
        <div className="">
          <h1 className="text-2xl font-bold">{selectedProject?.title}</h1>
        </div>
        <div className="flex flex-col h-full py-4 justify-evenly">
          <div className="">
            <h5 className="mb-2 tracking-[3px] uppercase text-sm">Feature</h5>
            <div className="flex flex-col">
              {selectedProject?.features.map((feature) => (
                <div key={feature}>{feature}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 tracking-[3px] uppercase text-sm">Package</h5>
            <div className="flex space-x-4">
              {selectedProject?.packages.map((pkg) => (
                <div className="w-14 h-14 overflow-hidden bg-white rounded-full flex justify-center items-center">
                  <Image src={`/${pkg.image}`} alt="" width={50} height={50} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-2 tracking-[3px] uppercase text-sm">
              Deployment
            </h5>
            {selectedProject?.deployments.map((deployment) => (
              <div key={deployment}>{deployment}</div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button text={"GitHub"} link={selectedProject?.github!} />
            <Button text={"Try Live"} link={selectedProject?.link!} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
