import Timeline from "@/components/timeline";

export default function About() {
  return (
    <div className="w-full h-screen px-40">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-20">
          <div className="flex justify-between flex-col">
            <h1 className="title">About Me</h1>
            <div className="flex flex-col space-y-10 tracking-widest text-lg">
              <h3>I was born in Seoul</h3>
              <h3>I am fluent in English</h3>
              <h3>I excel at problem solving</h3>
              <h3>I I love video games</h3>
            </div>
          </div>
          <div className="w-full flex h-full mt-10">
            <div className="border-l-2 my-4 border-gray-500 border-dotted">
              <div className="flex flex-col space-y-16 -translate-x-[9px]">
                <Timeline
                  title="Localization QA Release Manager"
                  subtitle="at Keywords Studios Montreal"
                  startTime="2021-08"
                  endTime="Present"
                />
                <Timeline
                  title="Localization QA Test Lead"
                  subtitle="at Keywords Studios Montreal"
                  startTime="2016-11"
                  endTime="2021-08"
                />
                <Timeline
                  title="Localization QA Korean Tester"
                  subtitle="at Keywords Studios Montreal"
                  startTime="2015-05"
                  endTime="2016-11"
                />
                <Timeline
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
