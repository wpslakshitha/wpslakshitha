"use client";

import { useState } from "react";
import { Code, Lightbulb, PenTool, Server, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Creating responsive, high-performance websites and web applications using modern frameworks.",
      features: [
        "Custom websites",
        "Web applications",
        "E-commerce",
        "API integration",
      ],
      iconBg: "bg-blue-100 dark:bg-blue-800/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-600 to-indigo-600",
      hoverGradient: "from-blue-700 to-indigo-700",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces that provide exceptional user experiences across all devices.",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Visual design",
      ],
      iconBg: "bg-emerald-100 dark:bg-emerald-800/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-500 to-blue-500",
      hoverGradient: "from-emerald-600 to-blue-600",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description:
        "Building robust APIs and server-side applications with scalability in mind.",
      features: [
        "API development",
        "Database design",
        "Cloud architecture",
        "Microservices",
      ],
      iconBg: "bg-indigo-100 dark:bg-indigo-800/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      gradient: "from-indigo-600 to-purple-600",
      hoverGradient: "from-indigo-700 to-purple-700",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Startup Consulting",
      description:
        "Providing technical guidance for entrepreneurs and startups looking to build MVPs.",
      features: [
        "Tech strategy",
        "MVP planning",
        "Resource planning",
        "Growth guidance",
      ],
      iconBg: "bg-amber-100 dark:bg-amber-800/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      gradient: "from-amber-500 to-orange-600",
      hoverGradient: "from-amber-600 to-orange-700",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Services
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-300 mt-4 text-sm sm:text-base px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            End-to-end solutions for digital products that make a difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  iconColor: string;
  gradient: string;
  hoverGradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <div className="relative p-4 sm:p-6 bg-white dark:bg-slate-800 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 h-full transition-all overflow-hidden">
        {/* Subtle gradient background that appears on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br opacity-0 ${service.gradient}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex flex-col sm:flex-row sm:items-start mb-5 relative z-10">
          <motion.div
            className={`${service.iconBg} ${service.iconColor} p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 shadow-md mx-auto sm:mx-0`}
            animate={{
              scale: isHovered ? 1.05 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1.5">
              <span className="relative">
                {service.title}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {service.description}
            </p>
          </div>
        </div>

        <ul className="space-y-2 sm:space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center text-sm text-slate-700 dark:text-slate-300"
              initial={{ x: 0 }}
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <motion.div
                animate={{
                  x: isHovered ? 2 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className={`w-1.5 h-1.5 rounded-full ${service.iconColor} mr-2.5`}
              />
              {feature}
            </motion.li>
          ))}
        </ul>

        <div className="flex justify-center sm:justify-start mt-auto">
          <motion.button
            className={`text-sm font-medium text-white bg-gradient-to-r ${service.gradient} hover:${service.hoverGradient} rounded-full py-2 px-4 flex items-center transition-all`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
            <motion.span
              animate={{
                x: isHovered ? 3 : 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: 0.1,
                },
              }}
            >
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
