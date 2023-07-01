import TagCloud from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "TagCloud";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-2 items-center gap-x-0.5 px-20 select-none">
      <div className="place-self-center tracking-widest">
        <h2 className="text-5xl">Hello, I'm</h2>
        <h1 className="text-7xl font-bold mt-5">Yunseok Hong</h1>
        <div className="text-2xl font-medium mt-10 flex">
          <span>A </span>
          <ul className="relative font-semibold">
            <li className="animate-swapWordAnimation opacity-0 tracking-[2px] lg-1 absolute left-0">
              Fullstack
            </li>
            <li className="animate-swapWordAnimation opacity-0 absolute left-0 lg-1 animation-delay-3000">
              Frontend
            </li>
            <li className="animate-swapWordAnimation opacity-0 tracking-[3px] lg-1 absolute left-0 animation-delay-6000">
              Backend
            </li>
          </ul>
          <span className="translate-x-[114px]"> Developer Wannabe</span>
        </div>
      </div>
      <div className="place-self-center">
        <TagCloud
          className="text-2xl select-none"
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(350, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
            keep: true,
          })}
        >
          {[
            "HTML",
            "CSS",
            "NodeJS",
            "Express",
            "SCSS",
            "Prisma",
            "Typescript",
            "RestAPI",
            "MongoDB",
            "React",
            "NextJS",
            "TailwindCSS",
            "Javascript",
          ]}
        </TagCloud>
      </div>
    </div>
  );
}
