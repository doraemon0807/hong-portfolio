export default function About() {
  return (
    <div className="w-full h-screen px-40">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-20">
          <div className="flex justify-between flex-col">
            <h1 className="title mb-24">About Me</h1>
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
                <div className="flex items-center space-x-10 relative">
                  <div className="w-4 h-4 rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-200 hover:bg-gray-200 transition-all cursor-pointer"></div>
                  <div className="flex flex-col">
                    <h4>Localization QA Release Manager</h4>
                  </div>
                  <div className="absolute -left-32 text-sm text-gray-300 flex flex-col items-center">
                    <h6>Present</h6>
                    <h6>ㅣ</h6>
                    <h6>2021-08</h6>
                  </div>
                </div>
                <div className="flex items-center space-x-10">
                  <div className="w-4 h-4 rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-200 hover:bg-gray-200 transition-all cursor-pointer"></div>
                  <div className="flex flex-col">
                    <h4>Localization QA Test Lead</h4>
                  </div>
                  <div className="absolute -left-32 text-sm text-gray-300 flex flex-col items-center">
                    <h6>2021-08</h6>
                    <h6>ㅣ</h6>
                    <h6>2016-11</h6>
                  </div>
                </div>
                <div className="flex items-center space-x-10">
                  <div className="w-4 h-4 rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-200 hover:bg-gray-200 transition-all cursor-pointer"></div>
                  <div className="flex flex-col">
                    <h4>Localization QA Korean Tester</h4>
                  </div>
                  <div className="absolute -left-32 text-sm text-gray-300 flex flex-col items-center">
                    <h6>2016-11</h6>
                    <h6>ㅣ</h6>
                    <h6>2015-05</h6>
                  </div>
                </div>
                <div className="flex items-center space-x-10">
                  <div className="w-4 h-4 rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-200 hover:bg-gray-200 transition-all cursor-pointer"></div>
                  <div className="flex flex-col">
                    <h4>Graduated McGill University</h4>
                  </div>
                  <div className="absolute -left-32 text-sm text-gray-300 flex flex-col items-center">
                    <h6>2014-05</h6>
                    <h6>ㅣ</h6>
                    <h6>2010-09</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
