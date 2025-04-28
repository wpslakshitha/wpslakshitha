"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "services", "projects", "blog", "contact"];

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find all section elements
      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section);
        if (!element) return { section, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        return { section, top, bottom };
      });

      // Find the current active section
      for (const { section, top, bottom } of sectionElements) {
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on component mount
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Handle click on navigation dots
  const handleDotClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Tooltip wrapper */}
        <ul className="flex flex-col gap-4">
          {sections.map((section) => (
            <li key={section} className="relative group">
              {/* Section name tooltip */}
              <div className="absolute right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs py-1 px-2 rounded shadow-md capitalize">
                  {section}
                </div>
              </div>

              {/* Navigation dot */}
              <button
                onClick={() => handleDotClick(section)}
                className="relative w-3 h-3 block rounded-full transition-all duration-300"
                aria-label={`Navigate to ${section} section`}
              >
                {/* Outer ring animation for active section */}
                {activeSection === section && (
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-blue-500"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Inner dot */}
                <motion.div
                  className={`w-full h-full rounded-full ${
                    activeSection === section
                      ? "bg-blue-500"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-blue-300 dark:hover:bg-blue-700"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
