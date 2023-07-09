import Button from "@/components/button";
import { cls } from "@/lib/utils";
import { BoxProps } from "@/pages";

export default function Contact({ isInView }: BoxProps) {
  return (
    <div id="contactBox" className="w-full h-screen px-20">
      <div className="w-full h-full flex justify-center items-center max-w-[1200px] mx-auto">
        <div className="w-full h-4/5 grid grid-cols-2 gap-16">
          <div
            className={cls(
              "w-full aspect-[3/4] min-w-[450px] bg-red-900 mt-10 transition-all duration-1000 delay-100",
              isInView ? "opacity-1" : "opacity-0 translate-y-12"
            )}
          ></div>
          <div className="w-full h-full max-w-[600px] flex flex-col items-end justify-evenly">
            <h1
              id="contactAnchor"
              className={cls(
                "title transition-all duration-1000",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              Contact
            </h1>
            <div
              className={cls(
                "flex flex-col items-end space-y-2 transition-all duration-1000 delay-100",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              <h3 className="font-medium tracking-[2px] ">
                Reach out to me at:
              </h3>
              <h5 className="tracking-[3px] ">doraemon0807@hotmail.com</h5>
              <h5 className="tracking-[3px] ">+1 514-467-8152</h5>
            </div>
            <div
              className={cls(
                "flex space-x-2 transition-all duration-1000 delay-100",
                isInView ? "opacity-1" : "opacity-0 translate-y-12"
              )}
            >
              <Button
                text={"GitHub"}
                link={"https://github.com/doraemon0807"}
              />
              <Button
                text={"LinkedIn"}
                link={"https://www.linkedin.com/in/yunseok-hong-9896a5158/"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
