import { mqState } from "@/lib/atom";
import { cls } from "@/lib/utils";
import { BoxProps } from "@/pages";
import TagCloud from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "TagCloud";
import { useRecoilValue } from "recoil";

export default function Home({ isInView }: BoxProps) {
  const screenSize = useRecoilValue(mqState);

  return (
    <div
      id="homeBox"
      className="w-full h-screen select-none relative flex justify-center items-center"
    >
      <div id="homeAnchor" className="absolute top-10"></div>
      <div className="w-full h-full grid relative xl:grid-cols-2 mx-auto items-center max-w-[1400px]">
        {/* TextArea */}
        <div
          className={cls(
            "place-self-center tracking-widest transition-all duration-1000",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-5xl -sm:text-center">Hello, I&apos;m</h2>
          <h1 className="text-7xl -sm:text-center font-bold mt-5 tracking-[3.5px] drop-shadow-[2px_2px_1px_rgba(120,120,120,0.8)]">
            Yunseok Hong
          </h1>
          <div className="relative text-lg -sm:justify-center -sm:text-center -sm:text-lg tracking-[2px] font-medium mt-10 flex -xl:w-1/2 -lg:w-full">
            <div className="">
              A <span className="lg-1 font-semibold">Fullstack Developer</span>{" "}
              specialized in{" "}
              <span className="lg-1 font-semibold">React & Typescript</span>,
              who enjoys building interactive and user-friendly website.
            </div>
          </div>
        </div>
        {/* TagCloud */}
        <div
          className={cls(
            "transition-all duration-1000 delay-100 w-full xl:block -xl:absolute -xl:-z-10 -xl:opacity-10",
            isInView ? "opacity-1" : "opacity-0 translate-y-12"
          )}
        >
          <TagCloud
            className="text-3xl -xl:text-5xl select-none flex items-center justify-center"
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius:
                Math.min(
                  screenSize == "xl" ? 350 : 1000,

                  w.innerHeight
                ) / 2,
              maxSpeed: "normal",
              keep: true,
            })}
          >
            {[
              "React",
              "Typescript",
              "NodeJS",
              "MongoDB",
              "NextJS",
              "TailwindCSS",
              "Javascript",
              "HTML",
              "CSS",
              "Prisma",
              "PlanetScale",
            ]}
          </TagCloud>
        </div>
      </div>
    </div>
  );
}
