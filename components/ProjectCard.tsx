"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight, Globe } from "lucide-react";

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
  url?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const { title, category, image, slug, url } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Handle touch events for mobile devices
  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    // Reset touch state after a delay to allow for viewing
    setTimeout(() => {
      setIsTouched(false);
    }, 1000);
  };

  // Combine hover and touch states for animations
  const isActive = isHovered || isTouched;

  return (
    <motion.div
      className="group h-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -6,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image with perspective tilt effect */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="w-full h-full perspective-container"
          animate={{
            rotateX: isActive ? -2 : 0,
            rotateY: isActive ? 2 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            animate={{
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Gradient overlay that appears on hover/touch */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating category badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <motion.div
            className="bg-white/90 dark:bg-slate-800/90 text-xs font-medium py-1 px-2 rounded-full text-blue-600 dark:text-blue-400 flex items-center shadow-sm"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Code size={12} className="mr-1" />
            {category}
          </motion.div>
        </div>

        {/* View project button that appears on hover/touch */}
        <motion.div
          className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={url || `/projects/${slug}`}
            className="inline-flex items-center justify-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full py-1.5 px-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target={url ? "_blank" : "_self"}
            rel={url ? "noopener noreferrer" : ""}
          >
            View Project
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: isActive ? 3 : 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.1,
              }}
              className="ml-1"
            >
              <ArrowRight size={10} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          <span className="relative">
            {title}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 dark:bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: isActive ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-center mt-auto">
          {url && (
            <>
              <Globe size={14} className="mr-1 text-blue-500 flex-shrink-0" />
              <span className="truncate max-w-[calc(100%-20px)]">
                {url.replace(/^https?:\/\//, "")}
              </span>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}
