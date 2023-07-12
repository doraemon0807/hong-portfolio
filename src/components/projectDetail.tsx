import ProjectDetailBig from "@/components/projectDetailBig";
import ProjectDetailSmall from "@/components/projectDetailSmall";
import { mqState } from "@/lib/atom";
import { projectList } from "@/lib/projectList";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

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
  }, [selectedProject?.images.length]);

  const screenSize = useRecoilValue(mqState);

  return (
    <>
      {screenSize == "lg" || screenSize == "xl" ? (
        <ProjectDetailBig id={id} counter={counter} project={selectedProject} />
      ) : (
        <ProjectDetailSmall
          id={id}
          counter={counter}
          project={selectedProject}
        />
      )}
    </>
  );
}
