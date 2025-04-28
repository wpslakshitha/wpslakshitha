import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    depth: Math.random() * 0.5 + 0.5, // For parallax effect (0.5 to 1.0)
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 dark:from-slate-900/40 dark:to-slate-800/40" />

      {/* Particles */}
      {particles.map((particle) => {
        // Calculate position based on scroll and mouse position
        const offsetX = (mousePosition.x - 0.5) * 50 * (1 - particle.depth);
        const offsetY = (mousePosition.y - 0.5) * 50 * (1 - particle.depth);
        const scrollOffset = scrollY * 0.1 * (1 - particle.depth);

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-300/10 to-purple-300/10 dark:from-blue-400/10 dark:to-purple-400/10"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.3 + particle.depth * 0.7, // More depth = more opacity
              filter: `blur(${(1 - particle.depth) * 3}px)`,
              transform: `translate3d(${offsetX}px, ${
                offsetY - scrollOffset
              }px, 0)`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Large gradient blobs that move slowly */}
      <motion.div
        className="absolute w-1/2 h-1/2 rounded-full bg-blue-200/10 dark:bg-blue-500/5 blur-3xl"
        style={{
          left: "20%",
          top: "30%",
        }}
        animate={{
          x: [(mousePosition.x - 0.5) * -100, (mousePosition.x - 0.5) * -100],
          y: [
            (mousePosition.y - 0.5) * -100 - scrollY * 0.05,
            (mousePosition.y - 0.5) * -100 - scrollY * 0.05,
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute w-1/2 h-1/2 rounded-full bg-purple-200/10 dark:bg-purple-500/5 blur-3xl"
        style={{
          right: "10%",
          bottom: "20%",
        }}
        animate={{
          x: [(mousePosition.x - 0.5) * 100, (mousePosition.x - 0.5) * 100],
          y: [
            (mousePosition.y - 0.5) * 100 + scrollY * 0.03,
            (mousePosition.y - 0.5) * 100 + scrollY * 0.03,
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />
    </div>
  );
}
