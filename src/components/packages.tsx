import { ProjectProps } from "@/pages/projects";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function Packages({ project }: ProjectProps) {
  return (
    <div className="flex space-x-4">
      {project?.packages.map((pkg) => (
        <div className="max-w-[60px] min-w-[30px] p-[2px] aspect-square overflow-hidden bg-white rounded-full flex justify-center items-center">
          <Image
            src={`/icons/${pkg.image}`}
            alt=""
            key={pkg.name}
            width={50}
            height={50}
            data-tooltip-id={pkg.name}
            data-tooltip-content={pkg.name}
            className="cursor-pointer"
          />
          <Tooltip id={pkg.name} />
        </div>
      ))}
    </div>
  );
}
