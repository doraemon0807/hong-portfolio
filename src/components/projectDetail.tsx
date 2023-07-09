import Button from "@/components/button";
import ProjectDetailBig from "@/components/projectDetailBig";
import ProjectDetailSmall from "@/components/projectDetailSmall";
import { projectList } from "@/lib/projectList";
import { use, useEffect, useState } from "react";

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

  const [lg, setLg] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  }, []);

  useEffect(() => {
    if (windowSize >= 1023) {
      setLg(true);
    } else {
      setLg(false);
    }
  }, [windowSize]);

  return (
    <>
      {lg ? (
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
