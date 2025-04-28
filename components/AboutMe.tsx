"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code, Server, PenTool } from "lucide-react";

export default function AboutMe() {
  const skills = [
    {
      name: "Next.js",
      level: 90,
      icon: <Code size={14} />,
      color: "bg-blue-600 dark:bg-blue-500",
      lightColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "React",
      level: 85,
      icon: <Code size={14} />,
      color: "bg-indigo-600 dark:bg-indigo-500",
      lightColor: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: <Code size={14} />,
      color: "bg-sky-600 dark:bg-sky-500",
      lightColor: "bg-sky-100 dark:bg-sky-900/30",
      textColor: "text-sky-600 dark:text-sky-400",
    },
    {
      name: "Node.js",
      level: 75,
      icon: <Server size={14} />,
      color: "bg-emerald-600 dark:bg-emerald-500",
      lightColor: "bg-emerald-100 dark:bg-emerald-900/30",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      name: "Prisma",
      level: 70,
      icon: <Server size={14} />,
      color: "bg-purple-600 dark:bg-purple-500",
      lightColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "UI/UX Design",
      level: 60,
      icon: <PenTool size={14} />,
      color: "bg-amber-600 dark:bg-amber-500",
      lightColor: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for better code organization
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto sm:p-0 p-4">
        {/* Section Header - Full Width for Mobile */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column with text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <motion.p
              className="text-base sm:text-lg mb-4 text-slate-700 dark:text-slate-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.1}
            >
              I'm a passionate developer and entrepreneur with over 8 years of
              experience creating innovative digital solutions for businesses of
              all sizes.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg mb-6 text-slate-700 dark:text-slate-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.2}
            >
              My journey in technology started when I built my first website at
              age 14. Since then, I've dedicated myself to mastering modern
              frameworks and creating exceptional user experiences that help
              businesses achieve their goals.
            </motion.p>

            {/* Skills tags - Scrollable container on mobile */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 mb-8 max-w-full overflow-x-auto pb-2 -mx-1 px-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.3}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className={`${skill.lightColor} ${skill.textColor} px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all whitespace-nowrap`}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Resume button - Full width on mobile */}
            <motion.button
              className="w-full sm:w-auto text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full py-2.5 px-5 flex items-center justify-center sm:justify-start transition-all"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.4}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Download size={16} className="mr-2" />
              Download Resume
              <motion.span
                animate={{
                  x: isHovered ? 3 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right column with image and experience badge */}
          <motion.div
            className="relative mb-8 md:mb-0 order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="aspect-square max-w-xs mx-auto md:mx-0 rounded-3xl overflow-hidden border-4 sm:border-8 border-white dark:border-slate-700 shadow-xl"
              initial={{ rotate: 3 }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
                transition: { duration: 0.5 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <img
                src="/about-image.png" // Placeholder image
                alt="Developer portrait"
                className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
              />

              {/* Subtle gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Experience badge - Smaller on mobile */}
            <motion.div
              className="absolute -bottom-4 sm:-left-4 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                3+
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Years Experience
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills section - better spacing for mobile */}
        <motion.div
          className="mt-12 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.3}
        >
          <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`${skill.lightColor} ${skill.textColor} p-1.5 rounded-md`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                  <motion.span
                    className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 sm:h-2.5 overflow-hidden">
                  <motion.div
                    className={`${skill.color} h-2 sm:h-2.5 rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
