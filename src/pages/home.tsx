import { cls } from "@/lib/utils";
import { BoxProps } from "@/pages";
import TagCloud from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "TagCloud";

export default function Home({ isInView }: BoxProps) {
  return (
    <div
      id="homeBox"
      className="w-full h-screen select-none relative flex justify-center items-center"
    >
      <div id="homeAnchor" className="absolute mt-40"></div>
      <div className="w-full h-full grid relative xl:grid-cols-2 mx-auto items-center max-w-[1400px]">
        {/* TextArea */}
        <div
          className={cls(
            "place-self-center tracking-widest transition-all duration-1000",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-5xl">Hello, I'm</h2>
          <h1 className="text-7xl font-bold mt-5 tracking-[3.5px] drop-shadow-[2px_2px_1px_rgba(120,120,120,0.8)]">
            Yunseok Hong
          </h1>
          <div className="text-2xl tracking-[2px] font-medium mt-10 flex">
            <span>A </span>
            <ul className="relative font-semibold">
              <li className="animate-swapWordAnimation opacity-0 tracking-[2px] lg-1 absolute left-0">
                Fullstack
              </li>
              <li className="animate-swapWordAnimation opacity-0 absolute tracking-[2px] left-0 lg-1 animation-delay-3000">
                Frontend
              </li>
              <li className="animate-swapWordAnimation opacity-0 tracking-[3px] lg-1 absolute left-0 animation-delay-6000">
                Backend
              </li>
            </ul>
            <span className="translate-x-[114px]"> Developer Wannabe</span>
          </div>
        </div>
        {/* TagCloud */}
        <div
          className={cls(
            "transition-all duration-1000 delay-100 w-full xl:block -xl:absolute -xl:scale-[2.5] -xl:-z-10 -xl:opacity-10",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          <TagCloud
            className="text-2xl select-none flex items-center justify-center"
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
        {/* <div
          className={cls(
            "transition-all duration-1000 delay-100 w-full xl:block hidden",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          <TagCloud
            className="text-2xl select-none flex items-center justify-center"
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
        </div> */}
      </div>
    </div>
  );
}
