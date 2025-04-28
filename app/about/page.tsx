"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const targetRef = useRef(null);

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

  return (
    <section
      ref={targetRef}
      className="bg-slate-50 dark:bg-slate-900 relative w-full min-h-screen py-10 md:py-20"
    >
      {/* Background pattern grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/2 -left-20 md:-left-40 w-64 md:w-96 h-64 md:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-10 md:pt-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Section heading with animated underline */}
          <motion.div
            className="mb-8 md:mb-16 relative inline-block"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-2">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                Me
              </span>
            </h2>
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
          </motion.div>

          {/* About content with stacked on mobile, two columns on desktop */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Profile image - full width on mobile, 2/5 on desktop */}
            <motion.div
              className="w-full md:w-2/5 mb-6 md:mb-0"
              variants={fadeInUp}
            >
              <div className="relative mx-auto max-w-xs md:max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <img
                  src="/your-profile-image.png"
                  alt="Profile Image"
                  className="w-full rounded-2xl shadow-xl relative z-10"
                />
              </div>
            </motion.div>

            {/* About text - full width on mobile, 3/5 on desktop */}
            <motion.div className="w-full md:w-3/5" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white mb-3 md:mb-4">
                Frontend Developer & UI/UX Designer
              </h3>

              <motion.p
                className="text-slate-700 dark:text-slate-300 mb-4 md:mb-6 text-sm md:text-base"
                variants={fadeInUp}
              >
                Hello! I'm Sachith Lakshitha, a passionate frontend developer
                and UI/UX designer based in [Your Location]. With over [X] years
                of experience in web development, I specialize in creating
                beautiful, functional, and responsive websites and applications.
              </motion.p>

              <motion.p
                className="text-slate-700 dark:text-slate-300 mb-4 md:mb-6 text-sm md:text-base"
                variants={fadeInUp}
              >
                My journey in web development started in [Year] when I first
                discovered my passion for creating digital experiences. Since
                then, I've worked with a diverse range of clients from startups
                to established businesses, helping them achieve their digital
                goals.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8"
                variants={fadeInUp}
              >
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-1 md:mb-2 text-base md:text-lg">
                    Skills
                  </h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    <li>• React & Next.js</li>
                    <li>• JavaScript & TypeScript</li>
                    <li>• Tailwind CSS & Framer Motion</li>
                    <li>• UI/UX Design</li>
                    <li>• Responsive Web Design</li>
                  </ul>
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-1 md:mb-2 text-base md:text-lg">
                    Education
                  </h4>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    <li>• B.Sc. in Computer Science</li>
                    <li>• Frontend Development Certification</li>
                    <li>• UI/UX Design Certification</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                  Download CV
                  <ArrowRight size={16} className="md:text-lg" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
