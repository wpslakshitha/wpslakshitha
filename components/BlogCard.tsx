"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags?: string[];
  slug: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const {
    title,
    excerpt,
    coverImage,
    publishDate,
    readTime,
    category,
    tags = [],
    slug,
  } = post;
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
    }, 1500);
  };

  // Combined interaction state for both mouse and touch
  const isActive = isHovered || isTouched;

  return (
    <motion.div
      className="group relative h-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Feature category badge */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {category}
        </motion.div>
      </div>

      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isActive ? 0.7 : 0.4 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-blue-600 dark:text-blue-500" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-indigo-600 dark:text-indigo-500" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent line-clamp-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-3"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {excerpt}
        </motion.p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {tags?.slice(0, 3).map((tag, index) => {
            // Alternating colors for tags
            const colors = [
              "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
              "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
              "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
            ];

            return (
              <motion.span
                key={index}
                className={`${
                  colors[index % colors.length]
                } text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag size={10} className="mr-1 sm:mr-1.5" />
                <span className="truncate max-w-[80px] sm:max-w-full">
                  {tag}
                </span>
              </motion.span>
            );
          })}
          {tags?.length > 3 && (
            <motion.span
              className="bg-slate-100 dark:bg-slate-700 text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-slate-700 dark:text-slate-300 flex items-center"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +{tags.length - 3}
            </motion.span>
          )}
        </div>

        {/* Read more button */}
        <motion.button
          className="text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full py-2 sm:py-2.5 px-4 sm:px-5 flex items-center justify-center gap-2 w-full transition-all"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <span>Read Article</span>
          <motion.span
            animate={{
              x: isActive ? 3 : 0,
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.span>
        </motion.button>
      </div>

      {/* Reading indicator corner - hide on smallest screens */}
      <motion.div
        className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, rgba(59, 130, 246, 0.5) 50%)",
        }}
      >
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <BookOpen size={14} className="text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
