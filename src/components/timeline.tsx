import { cls } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TimelineProps {
  index: number;
  title: string;
  subtitle: string;
  startTime: string;
  endTime: string;
  [key: string]: any;
}

export default function Timeline({
  index,
  title,
  subtitle,
  startTime,
  endTime,
  ...rest
}: TimelineProps) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const id = setInterval(
      () => setCounter((oldCount) => (oldCount >= 4 ? 1 : oldCount + 1)),
      3000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div {...rest} className="flex items-center space-x-10">
      <motion.div
        className={cls(
          `w-4 h-4 min-w-[16px] min-h-[16px] rounded-full ring-dark ring-4 bg-dark ring-offset-2 ring-offset-gray-500 transition-all`,
          counter === index ? "ring-offset-dark ring-offset-2 bg-gray-100" : ""
        )}
      />
      <div
        className={cls(
          `flex flex-col transition-all`,
          counter === index ? "text-white scale-[1.2]" : "text-gray-500"
        )}
      >
        <h4 className="text-base">{title}</h4>
        <h5 className="text-xs">{subtitle}</h5>
      </div>
      <div
        className={cls(
          `absolute -left-32 text-xs flex flex-col items-center transition-all`,
          counter === index ? "text-white scale-[1.2]" : "text-gray-500"
        )}
      >
        <h6>{endTime}</h6>
        <h6>ㅣ</h6>
        <h6>{startTime}</h6>
      </div>
    </div>
  );
}
