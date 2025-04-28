"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
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

  // Blog card hover animation
  const blogHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Blog data
  const blogPosts = [
    {
      id: 1,
      title: "Building a Modern Portfolio with Next.js and Framer Motion",
      excerpt:
        "Learn how to create stunning animations and transitions for your portfolio website using Next.js and Framer Motion.",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "Development",
      image: "/blog-1.png",
      slug: "building-portfolio-nextjs-framer-motion",
    },
    {
      id: 2,
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging design trends that are shaping the web development landscape in 2025 and beyond.",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "Design",
      image: "/blog-2.png",
      slug: "web-design-trends-2025",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS: Tips and Tricks for Developers",
      excerpt:
        "Discover advanced techniques and best practices for building efficient and responsive UIs with Tailwind CSS.",
      date: "April 5, 2025",
      readTime: "6 min read",
      category: "Development",
      image: "/blog-3.png",
      slug: "mastering-tailwind-css-tips",
    },
    {
      id: 4,
      title: "Improving Website Performance: A Comprehensive Guide",
      excerpt:
        "Learn how to optimize your website's performance for better user experience and higher search engine rankings.",
      date: "March 28, 2025",
      readTime: "8 min read",
      category: "Performance",
      image: "/blog-4.png",
      slug: "improving-website-performance-guide",
    },
  ];

  // Featured blog post
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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
                Blog
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
          </motion.div>

          {/* Featured post */}
          <motion.div className="mb-12" variants={fadeInUp}>
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
              variants={blogHover}
              initial="rest"
              whileHover="hover"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                    Featured
                  </div>
                </div>
                <div className="w-full md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center text-xs text-slate-600 dark:text-slate-400">
                      <Calendar size={14} className="mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center text-xs text-slate-600 dark:text-slate-400">
                      <Clock size={14} className="mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Regular posts grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={fadeInUp}
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
                variants={blogHover}
                initial="rest"
                whileHover="hover"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center text-xs text-slate-600 dark:text-slate-400">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center text-xs text-slate-600 dark:text-slate-400">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View more button */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/25">
              View All Posts
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
