import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const mouseCursor = document.getElementById("cursor");
    const mouseCoord = (e: MouseEvent) => {
      if (mouseCursor) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
      }
    };
    window.addEventListener("mousemove", mouseCoord);
  }, []);

  return (
    <div
      id="cursor"
      className="z-[100] -translate-x-1/2 -translate-y-1/2 absolute w-8 h-8 rounded-full bg-gray-500/50 pointer-events-none"
    />
  );
}
