import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full min-h-screen py-20 select-none">
      <div className="flex flex-col items-center">
        <h1 className="title mb-24">Projects</h1>
        <div className="grid grid-cols-3 gap-20">
          <motion.div className="w-60 h-80 bg-red-900"></motion.div>
          <div className="w-60 h-80 bg-red-900"></div>
          <div className="w-60 h-80 bg-red-900"></div>
          <div className="w-60 h-80 bg-red-900"></div>
          <div className="w-60 h-80 bg-red-900"></div>
          <div className="w-60 h-80 bg-red-900"></div>
        </div>
      </div>
    </div>
  );
}
