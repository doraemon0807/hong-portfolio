import Timeline from "@/components/timeline";
import { BoxProps } from "@/pages";
import { cls } from "@/lib/utils";
import { mqState } from "@/lib/atom";
import { useRecoilValue } from "recoil";
import { iconList } from "@/lib/iconList";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function About({ isInView }: BoxProps) {
  const screenSize = useRecoilValue(mqState);

  return (
    <div
      id="aboutBox"
      className="w-full min-h-screen h-full xl:px-24 select-none"
    >
      <div className="w-full h-full min-h-screen flex justify-center items-center max-w-[1200px] mx-auto">
        <div className="w-full xl:mt-20 -md:pt-20 pb-20 -xl:h-full xl:grid xl:grid-cols-2 xl:gap-20 -xl:flex -xl:flex-col -xl:space-y-20 -xl:items-center">
          {/* Introduction */}
          <div className="flex flex-col w-full -xl:items-center">
            <h1
              id="aboutAnchor"
              className={cls(
                "title transition-all duration-1000 xl:mb-10 -xl:mb-20 -xl:mt-40",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              About Me
            </h1>
            <div
              className={cls(
                "w-full -xl:items-center flex flex-col xl:space-y-10 -xl:space-y-6 -sm:tracking-widest tracking-[4px] text-lg transition-all duration-1000 delay-100",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              <div className="text-md space-y-5 -xl:text-center">
                <p>
                  Hey there! I am a{" "}
                  <span className="lg-1-blue font-semibold">
                    fullstack developer
                  </span>{" "}
                  who is absolutely crazy about video games.
                </p>
                <p>
                  My playground includes{" "}
                  <span className="lg-1-red font-semibold">ReactJS</span>,{" "}
                  <span className="lg-1-red font-semibold">NodeJS</span>, and{" "}
                  <span className="lg-1-red font-semibold">Typescript</span>,
                  and I get a kick out of turning ideas into software and
                  websites that come to life.
                </p>
                <p>
                  So if you are up for a chat about{" "}
                  <span className="lg-1-blue font-semibold">code</span>,{" "}
                  <span className="lg-1-blue font-semibold">gaming</span>, or{" "}
                  <span className="lg-1-blue font-semibold">
                    turning ideas into reality
                  </span>
                  ,{" "}
                  <span className="underline-offset-4 underline block">
                    I am your person!
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center -xl:items-center">
                <h2 className="mb-6 text-xl font-medium uppercase -xl:mt-10">
                  My Skillsets
                </h2>
                <div className="grid gap-6 xl:grid-cols-5 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-5 -sm:grid-cols-4">
                  {iconList.map((icon) => (
                    <div
                      key={icon.name}
                      className="max-w-[70px] min-w-[30px] p-[2px] aspect-square overflow-hidden bg-white rounded-full flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/${icon.image}`}
                        alt=""
                        key={icon.name}
                        width={60}
                        height={60}
                        data-tooltip-id={icon.name}
                        data-tooltip-content={icon.name}
                        className="cursor-pointer"
                      />
                      <Tooltip id={icon.name} className="tracking-wider" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Timeline */}
          {screenSize == "xs" ? (
            <div
              className={cls(
                "w-full flex h-full mt-10 transition-all delay-100 duration-1000",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              <div className="w-full h-full tracking-widest">
                <ul className="h-full flex text-center flex-col items-center justify-between space-y-10">
                  <li>
                    <h6 className="text-xs text-gray-400">2022-12 - Present</h6>
                    <h3>Full Stack Developer</h3>
                    <h5 className="text-sm text-gray-300">at Startup</h5>
                  </li>
                  <li>
                    <h6 className="text-xs text-gray-400">2021-08 - Present</h6>
                    <h3>Localization Release Manager</h3>
                    <h5 className="text-sm text-gray-300">
                      at Keywords Studios Montreal
                    </h5>
                  </li>
                  <li>
                    <h6 className="text-xs text-gray-400">2016-11 - 2021-08</h6>
                    <h3>Localization QA Test Lead</h3>
                    <h5 className="text-sm text-gray-300">
                      at Keywords Studios Montreal
                    </h5>
                  </li>
                  <li>
                    <h6 className="text-xs text-gray-400">2015-05 - 2016-11</h6>
                    <h3>Localization QA Korean Tester</h3>
                    <h5 className="text-sm text-gray-300">
                      at Keywords Studios Montreal
                    </h5>
                  </li>
                  <li>
                    <h6 className="text-xs text-gray-400">2010-09 - 2014-05</h6>
                    <h3>Majored in Mechanical Engineering</h3>
                    <h5 className="text-sm text-gray-300">
                      at McGill University
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              className={cls(
                "w-full flex h-full mt-10 ml-20 transition-all delay-100 duration-1000 -xl:flex -xl:justify-center -xl:-translate-x-16",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              <div className="border-l-2 my-4 border-gray-500 border-dotted translate-x-20">
                <div className="flex flex-col space-y-16 -translate-x-[9px]">
                  <Timeline
                    index={1}
                    title="Full Stack Developer"
                    subtitle="at Startup"
                    startTime="2022-12"
                    endTime="Present"
                  />
                  <Timeline
                    index={2}
                    title="Localization Release Manager"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2021-08"
                    endTime="Present"
                  />
                  <Timeline
                    index={3}
                    title="Localization QA Test Lead"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2016-11"
                    endTime="2021-08"
                  />
                  <Timeline
                    index={4}
                    title="Localization QA Korean Tester"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2015-05"
                    endTime="2016-11"
                  />
                  <Timeline
                    index={5}
                    title="Majored in Mechanical Engineering"
                    subtitle="at McGill University"
                    startTime="2010-09"
                    endTime="2014-05"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
