import Timeline from "@/components/timeline";
import Typewriter from "typewriter-effect";
import { BoxProps } from "@/pages";
import { cls } from "@/lib/utils";
import { mqState } from "@/lib/atom";
import { useRecoilValue } from "recoil";

export default function About({ isInView }: BoxProps) {
  const screenSize = useRecoilValue(mqState);

  return (
    <div
      id="aboutBox"
      className="w-full min-h-screen h-full xl:px-24 select-none"
    >
      <div className="w-full h-full flex justify-center items-center max-w-[1200px] mx-auto">
        <div className="w-full -xl:h-full xl:grid xl:grid-cols-2 xl:gap-20 -xl:flex -xl:flex-col -xl:space-y-20 -xl:items-center">
          {/* Typewriter */}
          <div className="flex flex-col w-full -xl:items-center">
            <h1
              id="aboutAnchor"
              className={cls(
                "title transition-all duration-1000 xl:mb-40 -xl:mb-20 -xl:mt-40",
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
              <div className="flex">
                <span>I</span>
                <Typewriter
                  options={{
                    strings: [
                      " was born in Seoul",
                      " currently live in Montreal",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="flex">
                <span>I am fluent in</span>
                <Typewriter
                  options={{
                    strings: [" English", " French", " Korean"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="flex">
                <span>I excel at</span>
                <Typewriter
                  options={{
                    strings: [
                      " problem solving",
                      " leadership",
                      " task management",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="flex">
                <span>I love</span>
                <Typewriter
                  options={{
                    strings: [
                      " video games",
                      " cats and dogs",
                      " playing guitar",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
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
                    <h6 className="text-xs text-gray-400">2021-08 - Present</h6>
                    <h3>Localization QA Release Manager</h3>
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
                    title="Localization QA Release Manager"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2021-08"
                    endTime="Present"
                  />
                  <Timeline
                    index={2}
                    title="Localization QA Test Lead"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2016-11"
                    endTime="2021-08"
                  />
                  <Timeline
                    index={3}
                    title="Localization QA Korean Tester"
                    subtitle="at Keywords Studios Montreal"
                    startTime="2015-05"
                    endTime="2016-11"
                  />
                  <Timeline
                    index={4}
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
