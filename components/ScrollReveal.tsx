import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, useInView, Variants, Transition } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
  animation?: Variants;
  transition?: Transition;
  className?: string;
}

export default function ScrollReveal({
  children,
  threshold = 0.1,
  animation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  transition = {
    duration: 0.8,
    ease: "easeOut",
  },
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: `0px 0px -${(1 - threshold) * 100}% 0px`,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || hasAnimated ? "visible" : "hidden"}
      variants={animation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
