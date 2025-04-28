"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Project card hover animation
  const projectHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/project-1.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wpslakshitha/project-1",
    },
    {
      id: 2,
      title: "Portfolio Template",
      description:
        "A customizable portfolio template with dark mode and smooth animations.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      image: "/project-2.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wpslakshitha/project-2",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop functionality and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
      image: "/project-3.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wpslakshitha/project-3",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A modern blog platform with CMS integration and markdown support.",
      tags: ["Next.js", "Contentful", "Tailwind CSS"],
      image: "/project-4.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/wpslakshitha/project-4",
    },
  ];

  return (
    <section
      ref={targetRef}
      className="bg-slate-50 dark:bg-slate-900 relative w-full min-h-screen sm:py-20"
    >
      {/* Background pattern grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section heading with animated underline */}
          <motion.div
            className="mb-16 relative inline-block"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                Projects
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={fadeInUp}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
                variants={projectHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white rounded-full hover:bg-white dark:hover:bg-slate-900 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white rounded-full hover:bg-white dark:hover:bg-slate-900 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View more button */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/25">
              View All Projects
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
