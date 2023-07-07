import Timeline from "@/components/timeline";
import Typewriter from "typewriter-effect";
import { BoxProps } from "@/pages";
import { cls } from "@/lib/utils";

export default function About({ isInView }: BoxProps) {
  return (
    <div id="aboutBox" className="w-full h-screen px-40 select-none">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-20">
          {/* Typewriter */}
          <div className="flex justify-around flex-col">
            <h1
              id="aboutAnchor"
              className={cls(
                "title transition-all duration-1000",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              About Me
            </h1>
            <div
              className={cls(
                "flex flex-col space-y-10 tracking-widest text-lg transition-all duration-1000 delay-100",
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
          <div
            className={cls(
              "w-full flex h-full mt-10 ml-20 transition-all delay-100 duration-1000",
              isInView ? "opacity-1" : "opacity-0 translate-y-12"
            )}
          >
            <div className="border-l-2 my-4 border-gray-500 border-dotted">
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
                  title="Graduated McGill University"
                  subtitle="Majored in Mechanical Engineering"
                  startTime="2010-09"
                  endTime="2014-05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
