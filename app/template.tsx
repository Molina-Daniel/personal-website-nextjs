"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

type TemplateProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Template = ({ children }: TemplateProps) => {
  const scrollProgress = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* progress bar */}
      <span
        style={{ transform: `translateY(${scrollProgress - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
