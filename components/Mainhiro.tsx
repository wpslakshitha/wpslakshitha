"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Detect device type for optimized animations
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // For cursor follow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);

    // Check if device is mobile and screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Only add mouse tracking on non-mobile devices
    if (window.innerWidth >= 768) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);

        // Calculate position relative to the center of the screen
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const xPos = (clientX / winWidth) * 2 - 1;
        const yPos = (clientY / winHeight) * 2 - 1;

        setMousePosition({ x: xPos * 15, y: yPos * 15 });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", checkScreenSize);
      };
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [mouseX, mouseY]);

  // Text animation for name
  const nameText = "Sachith Lakshitha";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < nameText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + nameText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [currentIndex, nameText.length]);

  // Role text animation with words - now only starts after typing is complete
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Creative Coder",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!typingComplete) return; // Only start role animation after typing is complete

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [typingComplete, roles.length]);

  // Force typingComplete to true immediately to fix potential timing issues
  useEffect(() => {
    // Force animation to complete after a safe timeout
    const forceTimeout = setTimeout(() => {
      if (!typingComplete) {
        setTypingComplete(true);
        setDisplayText(nameText);
        setCurrentIndex(nameText.length);
      }
    }, 5000); // 5 seconds should be more than enough for the typing animation

    return () => clearTimeout(forceTimeout);
  }, [typingComplete, nameText]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const roleVariants = {
    enter: { y: 20, opacity: 0 },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const socialItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const scrollIconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  // Floating elements animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Gradient blur based on mouse position
  const bgX = useSpring(mousePosition.x);
  const bgY = useSpring(mousePosition.y);

  // For the animated gradient background - updated for light/dark mode
  const background = useMotionTemplate`
    radial-gradient(
      800px circle at calc(50% + ${bgX}px) calc(50% + ${bgY}px),
      rgba(59, 130, 246, 0.1),
      rgba(139, 92, 246, 0.1),
      rgba(236, 72, 153, 0.1),
      transparent 70%
    )
  `;

  return (
    <motion.section
      ref={targetRef}
      className="bg-slate-50 dark:bg-slate-900 relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20"
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Animated background shapes - simpler for mobile */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <>
          <motion.div
            className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={
              !isMobile
                ? {
                    x: [0, mousePosition.x * -0.5],
                    y: [0, mousePosition.y * -0.5],
                  }
                : {
                    x: [0, -10, 0],
                    y: [0, -15, 0],
                    transition: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }
            }
            transition={!isMobile ? { type: "spring", damping: 20 } : {}}
          />
          <motion.div
            className="absolute top-1/2 -left-20 sm:-left-40 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={
              !isMobile
                ? {
                    x: [0, mousePosition.x * 0.5],
                    y: [0, mousePosition.y * 0.5],
                  }
                : {
                    x: [0, 10, 0],
                    y: [0, 15, 0],
                    transition: {
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    },
                  }
            }
            transition={!isMobile ? { type: "spring", damping: 20 } : {}}
          />

          {/* Hide some decorative elements on mobile to improve performance */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute -bottom-40 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl"
                animate={{
                  x: [0, mousePosition.x * 0.3],
                  y: [0, mousePosition.y * 0.3],
                }}
                transition={{ type: "spring", damping: 20 }}
              />

              <motion.div
                className="absolute top-1/4 right-1/4 text-blue-500/5 dark:text-blue-500/10 text-4xl md:text-6xl font-mono font-bold"
                variants={floatingVariants}
                animate="animate"
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-1/5 text-purple-500/5 dark:text-purple-500/10 text-3xl md:text-4xl font-mono font-bold"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                {"{...}"}
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-1/4 text-pink-500/5 dark:text-pink-500/10 text-4xl md:text-5xl font-mono font-bold"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 2 }}
              >
                &lt;div&gt;
              </motion.div>
            </>
          )}
        </>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Username as smaller text above main heading */}
            <motion.div
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center mb-3 sm:mb-4 bg-slate-200/50 dark:bg-slate-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-1.5 sm:mr-2">
                @
              </span>
              <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                devSachith
              </span>
            </motion.div>

            {/* Main heading with typing animation */}
            <motion.h1
              variants={titleVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-4"
            >
              {displayText}
              {currentIndex < nameText.length && (
                <span className="inline-block w-1.5 sm:w-2 h-6 sm:h-8 md:h-10 bg-blue-500 dark:bg-blue-400 animate-blink"></span>
              )}
            </motion.h1>

            {/* Animated role text */}
            <div className="h-6 sm:h-8 md:h-10 overflow-hidden mb-4 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  variants={roleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-blue-600 dark:text-blue-400"
                >
                  {typingComplete && roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={subtitleVariants}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-lg mb-6 sm:mb-8"
            >
              I build beautiful, responsive, and high-performance web
              applications with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            {!isSmallScreen && (
              <motion.div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 sm:mb-12">
                <motion.a
                  href="#projects"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                >
                  View My Work
                  <ArrowRight size={16} className="sm:hidden" />
                  <ArrowRight size={18} className="hidden sm:block" />
                </motion.a>
                <motion.a
                  href="#contact"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            )}

            {/* Social links */}
            <motion.div
              variants={socialVariants}
              className="flex gap-4 sm:gap-5 justify-center md:justify-start"
            >
              {/* Social icons - smaller on mobile */}
              <motion.a
                href="https://github.com/sachithlakshitha"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover="hover"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:hidden" />
                <Github size={24} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sachith-lakshitha"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover="hover"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:hidden" />
                <Linkedin size={24} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="https://twitter.com/sachithlak"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover="hover"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="sm:hidden" />
                <Twitter size={24} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="https://instagram.com/sachithlakshitha"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItemVariants}
                whileHover="hover"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:hidden" />
                <Instagram size={24} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="mailto:sachith@example.com"
                variants={socialItemVariants}
                whileHover="hover"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="sm:hidden" />
                <Mail size={24} className="hidden sm:block" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Hero Image/Animated Graphic */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            {/* Parallax Profile Image */}
            <motion.div
              style={{ y }}
              className="relative z-10 mx-auto max-w-xs sm:max-w-sm md:max-w-none"
            >
              <motion.div
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Replace with your profile image */}
                <img
                  src="/your-profile-image.png"
                  alt="Sachith Lakshitha"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
              </motion.div>

              {isSmallScreen && (
                <motion.div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 sm:mb-12">
                  <motion.a
                    href="#projects"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                  >
                    View My Work
                    <ArrowRight size={16} className="sm:hidden" />
                    <ArrowRight size={18} className="hidden sm:block" />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
                  >
                    Contact Me
                  </motion.a>
                </motion.div>
              )}

              {/* Experience badges floating around image - optimized for different screen sizes */}
              <>
                <motion.div
                  className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    5+
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Years Exp.
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-4 sm:-right-8 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                >
                  <span className="text-purple-600 dark:text-purple-400 font-bold">
                    50+
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Projects
                  </span>
                </motion.div>

                <motion.div
                  className="absolute  sm:bottom-[550px]  bottom-[150px] sm:left-10 -left-6 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-2"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-pink-600 dark:text-pink-400 font-bold">
                    UI/UX
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Expert
                  </span>
                </motion.div>
              </>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator at bottom - hide on very small screens */}
        <motion.div
          variants={scrollIconVariants}
          initial="hidden"
          animate="visible"
          className="absolute hidden sm:block  bottom-4 sm:bottom-[250px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div
            variants={scrollIconVariants}
            animate="bounce"
            className="bg-slate-200 dark:bg-slate-700 rounded-full p-1.5 sm:p-2"
          >
            <ChevronDown
              size={16}
              className="sm:hidden text-slate-500 dark:text-slate-400"
            />

            <ChevronDown
              size={18}
              className="hidden sm:block text-slate-500 dark:text-slate-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
