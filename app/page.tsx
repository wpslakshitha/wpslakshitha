"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Hero from "@/components/Mainhiro";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import SideNavigation from "@/components/SideNavigation";
import { motion } from "framer-motion";
// @ts-ignore - File exists but with different casing
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  // Sample data
  const featuredProjects = [
    {
      id: 1,
      title: "Ceylon Junction Restaurant Website",
      category: "Web development",
      image:
        "https://uvindurajapakshe.github.io/assets/images/projects/ceylonjunction-projects.png",
      slug: "ceylon-junction",
      url: "https://ceylon-junction.com",
    },
    {
      id: 2,
      title: "Dream Cars Melbourn Website",
      category: "Web development",
      image:
        "https://uvindurajapakshe.github.io/assets/images/projects/onebusiness-projects.png",
      slug: "dream-cars-melbourn",
      url: "https://dreamcarsmelbourn.com",
    },
    {
      id: 3,
      title: "GotaGoGama Digital ",
      category: "Web Development",
      image:
        "https://uvindurajapakshe.github.io/assets/images/projects/medicinecrisis-projects.png",
      slug: "gotagogama-digital",
      url: "https://gotagogama-digital.com",
    },
    {
      id: 4,
      title: "MedicineCrisisLK Website",
      category: "Web Development",
      image:
        "https://uvindurajapakshe.github.io/assets/images/projects/ggg-projects.png",
      slug: "medicine-crisis-lk",
      url: "https://medicinecrisis.lk",
    },
    {
      id: 5,
      title: "OneBusinessSolutions Website",
      category: "Web Development",
      image:
        "https://uvindurajapakshe.github.io/assets/images/projects/dreamcars-projects.png",
      slug: "one-business-solutions",
      url: "https://onebusinesssolutions.com",
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development for 2025",
      coverImage:
        "https://techcrunch.com/wp-content/uploads/2024/12/getty-gemini-laptop.jpg?resize=1200,800",
      slug: "future-of-web-development",
      publishDate: "April 15, 2025",
      readTime: "5 min read",
      category: "Web Development",
      tags: ["NextJS", "React", "Frontend"],
    },
    {
      id: 2,
      title: "Building Scalable Applications",
      excerpt: "Best practices for creating applications that can grow",
      coverImage: "/api/placeholder/600/400",
      slug: "building-scalable-applications",
      publishDate: "April 3, 2025",
      readTime: "8 min read",
      category: "Architecture",
      tags: ["Scalability", "NodeJS", "Database"],
    },
    {
      id: 3,
      title: "Web Accessibility Guidelines",
      excerpt: "Understanding and implementing accessibility standards",
      coverImage: "/api/placeholder/600/400",
      slug: "web-accessibility-guidelines",
      publishDate: "March 20, 2025",
      readTime: "6 min read",
      category: "Accessibility",
      tags: ["WCAG", "HTML", "UI/UX"],
    },
  ];

  // Staggered animation variants for project grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Initialize smooth scroll
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="page-transition overflow-hidden">
      {/* Hero section with enhanced animations */}
      <section id="home" className="">
        <Hero />
      </section>

      {/* About section with reveal animations */}
      <section id="about">
        <ScrollReveal>
          <AnimatedSection className="mt-1 pt-10 bg-slate-50 dark:bg-slate-900 relative">
            <AboutMe />
          </AnimatedSection>
        </ScrollReveal>
      </section>

      {/* Services section */}
      <section id="services">
        <ScrollReveal>
          <AnimatedSection className="pt-10 bg-slate-50 dark:bg-slate-900 relative">
            <Services />
          </AnimatedSection>
        </ScrollReveal>
      </section>

      {/* Projects section with enhanced animations */}
      <section id="projects">
        <ScrollReveal>
          <AnimatedSection className="mt-1 py-12 sm:py-16 bg-slate-50 dark:bg-slate-900 relative sm:p-0 p-4">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-100 rounded-full opacity-20 dark:opacity-10 blur-3xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-indigo-100 rounded-full opacity-20 dark:opacity-10 blur-3xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.div
                className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="text-blue-600 font-medium text-sm uppercase tracking-wider block mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Portfolio Showcase
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <motion.p
                  className="text-slate-600 dark:text-slate-300 mt-4 px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Explore my recent web development and design work
                </motion.p>
              </motion.div>

              {/* Projects Grid with staggered animation */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {featuredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>

              {/* View all button */}
              <motion.div
                className="mt-8 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 border-blue-600 text-blue-600 hover:text-white"
                  asChild
                >
                  <a href="/projects">
                    <span className="relative z-10">View All Projects</span>
                    <motion.span
                      className="absolute inset-0 bg-blue-600 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </ScrollReveal>
      </section>

      {/* Blog section */}
      <section id="blog">
        <ScrollReveal>
          <AnimatedSection className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900 relative sm:p-0 p-4">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.div
                className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="text-blue-600 font-medium text-sm uppercase tracking-wider block mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Latest Articles
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  From My Blog
                </h2>
                <motion.p
                  className="text-slate-600 dark:text-slate-300 mt-4 px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Insights and tutorials on web development and design
                </motion.p>
              </motion.div>

              {/* Blog Grid with staggered animation */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {latestPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </motion.div>

              {/* View all button */}
              <motion.div
                className="mt-8 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden group px-6 sm:px-8 py-2 sm:py-3 border-blue-600 text-blue-600 hover:text-white"
                  asChild
                >
                  <a href="/blog">
                    <span className="relative z-10">Read All Articles</span>
                    <motion.span
                      className="absolute inset-0 bg-blue-600 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </ScrollReveal>
      </section>

      {/* Contact section */}
      <section id="contact">
        <ScrollReveal>
          <AnimatedSection className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.div
                className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="text-blue-600 font-medium text-sm uppercase tracking-wider block mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Get In Touch
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Contact Me
                </h2>
                <motion.p
                  className="text-slate-600 dark:text-slate-300 mt-4 px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Have a project in mind? Let's work together!
                </motion.p>
              </motion.div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </AnimatedSection>
        </ScrollReveal>
      </section>

      {/* Mobile-friendly side navigation */}
      <SideNavigation />
    </main>
  );
}
