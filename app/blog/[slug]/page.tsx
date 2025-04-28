"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

// Blog data (in a real app, you would fetch this)
const blogPosts = [
  {
    id: "building-portfolio-nextjs-framer-motion",
    title: "Building a Modern Portfolio with Next.js and Framer Motion",
    excerpt:
      "Learn how to create stunning animations and transitions for your portfolio website using Next.js and Framer Motion.",
    date: "April 15, 2025",
    readTime: "5 min read",
    category: "Development",
    image: "/blog-1.png",
    author: {
      name: "Jane Smith",
      avatar: "/avatar.png",
      role: "Senior Developer",
    },
    content: `
      <p>In today's competitive digital landscape, having a portfolio that stands out is essential for web developers and designers. Next.js combined with Framer Motion provides a powerful toolkit for creating engaging, animated web experiences that capture attention and showcase your skills effectively.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js has become the go-to React framework for production, offering:</p>
      <ul>
        <li>Hybrid static and server rendering</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Client-side routing with optimized prefetching</li>
        <li>Built-in CSS and Sass support</li>
        <li>Development environment with Fast Refresh</li>
      </ul>
      
      <h2>Enter Framer Motion</h2>
      <p>Framer Motion is a production-ready motion library for React that powers the animations in this portfolio. It provides a simple declarative syntax that makes creating complex animations surprisingly easy.</p>
      
      <h2>Getting Started</h2>
      <p>To begin, install the necessary dependencies:</p>
      <pre><code>npm install next framer-motion</code></pre>
      
      <p>Let's create a simple fade-in animation for page elements:</p>
      <pre><code>
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

// Then apply it to your components:
&lt;motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
&gt;
  Your content here
&lt;/motion.div&gt;
      </code></pre>
      
      <h2>Creating Page Transitions</h2>
      <p>Smooth transitions between pages can significantly enhance user experience. With Next.js and Framer Motion, you can create seamless page transitions that make your portfolio feel like a cohesive experience.</p>
      
      <h2>Implementing Scroll-Based Animations</h2>
      <p>Scroll-triggered animations create an interactive experience as users explore your content. Here's how to implement a simple parallax effect:</p>
      <pre><code>
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start start", "end start"],
});

const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

// Then apply it to your component:
&lt;motion.div style={{ y }}&gt;
  This will move as you scroll
&lt;/motion.div&gt;
      </code></pre>
      
      <h2>Optimizing Performance</h2>
      <p>While animations enhance user experience, they can impact performance if not implemented carefully. Here are some tips to keep your animated portfolio running smoothly:</p>
      <ul>
        <li>Use the layout prop for animations that affect document flow</li>
        <li>Prefer opacity and transform properties as they don't trigger layout recalculations</li>
        <li>Use the useInView hook to only animate elements when they enter the viewport</li>
        <li>Set reasonable animation durations (usually under 500ms)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building a modern portfolio with Next.js and Framer Motion allows you to create a memorable experience that showcases not just your work but also your attention to detail and user experience. The combination of Next.js's development features and Framer Motion's animation capabilities provides everything you need to build a portfolio that truly stands out.</p>
    `,
  },
  {
    id: "web-design-trends-2025",
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging design trends that are shaping the web development landscape in 2025 and beyond.",
    date: "April 10, 2025",
    readTime: "7 min read",
    category: "Design",
    image: "/blog-2.png",
    author: {
      name: "Alex Johnson",
      avatar: "/avatar2.png",
      role: "UX Designer",
    },
    content: `
      <p>Web design continues to evolve at a rapid pace, with new technologies and user expectations driving innovation. In 2025, several key trends are reshaping how we approach web design and development.</p>
      
      <h2>1. Immersive Scrollytelling</h2>
      <p>Interactive storytelling through scroll-driven animations has matured beyond novelty to become a powerful narrative tool. The technique combines visual elements, animation, and content that respond to the user's scrolling behavior, creating an immersive experience.</p>
      
      <h2>2. Spatial Interfaces</h2>
      <p>With the rise of mixed reality technologies, web interfaces are beginning to incorporate spatial elements. This doesn't necessarily mean full 3D websites, but rather thoughtful incorporation of depth, dimensionality, and spatial awareness into the user experience.</p>
      
      <h2>3. AI-Enhanced Personalization</h2>
      <p>Artificial intelligence is enabling unprecedented levels of personalization. Websites now adapt their layout, content, and functionality based on user behavior and preferences, creating experiences that feel custom-tailored to each visitor.</p>
      
      <h2>4. Ethical and Inclusive Design</h2>
      <p>Accessibility and inclusivity have moved from afterthoughts to core design principles. In 2025, websites are being designed with diverse users in mind from the start, ensuring that content is accessible to everyone regardless of ability or context.</p>
      
      <h2>5. Kinetic Typography</h2>
      <p>Dynamic, moving text is becoming a centerpiece of modern web design. Subtle animations bring typography to life, improving engagement and guiding users through content in a more intuitive way.</p>
      
      <h2>6. Micro-Interactions with Purpose</h2>
      <p>Small, purposeful animations that respond to user actions continue to enhance interfaces. These micro-interactions provide feedback, guide users, and add personality to digital experiences.</p>
      
      <h2>7. Sustainable Web Design</h2>
      <p>Energy-efficient websites with optimized assets and careful resource management are gaining importance as the environmental impact of digital products becomes more apparent. Designers are now considering how to create beautiful experiences with minimal carbon footprint.</p>
      
      <h2>8. Variable Typography</h2>
      <p>Variable fonts allow for fine-tuned control over type appearance while keeping file sizes small. This technology enables more expressive typography that can adapt to different screen sizes and user preferences.</p>
      
      <h2>9. Voice User Interfaces</h2>
      <p>As voice assistants become more capable, websites are incorporating voice interaction as a complementary input method. This multimodal approach makes websites more accessible and convenient across different contexts.</p>
      
      <h2>10. Brutalist Revival</h2>
      <p>A refined version of brutalist web design is making a comeback, emphasizing raw functionality and unconventional layouts while maintaining usability. This approach creates distinctive experiences that stand out in an increasingly homogenized web.</p>
      
      <h2>Conclusion</h2>
      <p>These trends reflect broader shifts in technology and society, emphasizing experiences that are more immersive, adaptable, and inclusive. As these trends continue to evolve, they'll shape how users interact with digital content and services in the years to come.</p>
    `,
  },
  {
    id: "mastering-tailwind-css-tips",
    title: "Mastering Tailwind CSS: Tips and Tricks for Developers",
    excerpt:
      "Discover advanced techniques and best practices for building efficient and responsive UIs with Tailwind CSS.",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "Development",
    image: "/blog-3.png",
    author: {
      name: "Chris Lee",
      avatar: "/avatar3.png",
      role: "Frontend Engineer",
    },
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling web applications. Its utility-first methodology provides unprecedented flexibility and speed in UI development. This article explores advanced techniques to help you take your Tailwind skills to the next level.</p>
      
      <h2>Effective Organization with Components</h2>
      <p>While Tailwind's utility classes are powerful, they can lead to lengthy class strings. Extract common patterns into components to maintain clean, readable code:</p>
      
      <pre><code>
// Instead of repeating this everywhere
&lt;button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition-colors"&gt;
  Button
&lt;/button&gt;

// Create a reusable component
function Button({ children }) {
  return (
    &lt;button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow transition-colors"&gt;
      {children}
    &lt;/button&gt;
  );
}
      </code></pre>
      
      <h2>Customizing Your Theme</h2>
      <p>Tailwind's default design system is excellent, but customizing it to match your brand is essential:</p>
      
      <pre><code>
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          light: '#FFECCF',
          DEFAULT: '#FF8A00',
          dark: '#D97700',
        }
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}
      </code></pre>
      
      <h2>Responsive Design Strategies</h2>
      <p>Tailwind's responsive prefixes make building adaptive interfaces straightforward, but there are patterns that can make your responsive designs even more effective:</p>
      
      <pre><code>
// Mobile-first approach with responsive variants
&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  // Content
&lt;/div&gt;
      </code></pre>
      
      <h2>Performance Optimization</h2>
      <p>Tailwind generates thousands of utility classes, but you can optimize the output for production:</p>
      <ul>
        <li>Use PurgeCSS (built into Tailwind CSS v2.0+) to remove unused styles</li>
        <li>Split your CSS for critical above-the-fold content</li>
        <li>Consider @layer directives to better organize your CSS</li>
      </ul>
      
      <h2>Creating Custom Utilities</h2>
      <p>When Tailwind doesn't provide a utility you need, create your own:</p>
      
      <pre><code>
// tailwind.config.js
module.exports = {
  theme: {
    // ...theme config
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
      </code></pre>
      
      <h2>Handling States Elegantly</h2>
      <p>Tailwind provides modifiers for various states, but combining them can create powerful interactions:</p>
      
      <pre><code>
&lt;div class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10"&gt;
  Hover to see the magic happen!
&lt;/div&gt;
      </code></pre>
      
      <h2>Dark Mode Implementation</h2>
      <p>Implementing dark mode is straightforward with Tailwind's dark variant:</p>
      
      <pre><code>
&lt;div class="bg-white text-black dark:bg-gray-800 dark:text-white"&gt;
  This adapts to light and dark modes!
&lt;/div&gt;
      </code></pre>
      
      <h2>Working with Dynamic Content</h2>
      <p>When classes need to be applied conditionally:</p>
      
      <pre><code>
function Alert({ type = 'info', message }) {
  const alertStyles = {
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
  }
  
  return (
    &lt;div class={\`p-4 border rounded-lg \${alertStyles[type]}\`}&gt;
      {message}
    &lt;/div&gt;
  )
}
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>Mastering Tailwind CSS is about understanding both its utility-first philosophy and how to extend it for your specific needs. By combining these advanced techniques with Tailwind's robust foundation, you can build beautiful, responsive interfaces more efficiently than ever before.</p>
    `,
  },
  {
    id: "improving-website-performance-guide",
    title: "Improving Website Performance: A Comprehensive Guide",
    excerpt:
      "Learn how to optimize your website's performance for better user experience and higher search engine rankings.",
    date: "March 28, 2025",
    readTime: "8 min read",
    category: "Performance",
    image: "/blog-4.png",
    author: {
      name: "Sophia Chen",
      avatar: "/avatar4.png",
      role: "Performance Engineer",
    },
    content: `
      <p>Website performance has become a critical factor in user experience and business success. Slow-loading websites frustrate users, increase bounce rates, and negatively impact search engine rankings. This comprehensive guide explores strategies to optimize your website's performance across various dimensions.</p>
      
      <h2>Why Performance Matters</h2>
      <p>Studies consistently show that users abandon websites that take more than a few seconds to load:</p>
      <ul>
        <li>53% of mobile site visits are abandoned if pages take longer than 3 seconds to load</li>
        <li>Every 100ms improvement in page load time can increase conversion rates by 1%</li>
        <li>Google uses page speed as a ranking factor for both desktop and mobile search results</li>
      </ul>
      
      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals have become the standard metrics for measuring user experience:</p>
      
      <h3>Largest Contentful Paint (LCP)</h3>
      <p>LCP measures loading performance. To provide a good user experience, aim for an LCP of 2.5 seconds or less.</p>
      <p>Optimization strategies:</p>
      <ul>
        <li>Optimize server response times</li>
        <li>Remove render-blocking resources</li>
        <li>Prioritize critical resources</li>
        <li>Optimize and compress images</li>
      </ul>
      
      <h3>First Input Delay (FID)</h3>
      <p>FID measures interactivity. To provide a good user experience, aim for an FID of 100 milliseconds or less.</p>
      <p>Optimization strategies:</p>
      <ul>
        <li>Break up long tasks</li>
        <li>Optimize JavaScript execution</li>
        <li>Use web workers for CPU-intensive tasks</li>
        <li>Reduce JavaScript payload</li>
      </ul>
      
      <h3>Cumulative Layout Shift (CLS)</h3>
      <p>CLS measures visual stability. To provide a good user experience, aim for a CLS of 0.1 or less.</p>
      <p>Optimization strategies:</p>
      <ul>
        <li>Always include size attributes on images and videos</li>
        <li>Reserve space for dynamic content</li>
        <li>Avoid inserting content above existing content</li>
        <li>Prefer transform animations to properties that trigger layout changes</li>
      </ul>
      
      <h2>Image Optimization</h2>
      <p>Images often account for the largest portion of a webpage's size. Optimizing them can dramatically improve load times:</p>
      <ul>
        <li>Use modern formats like WebP or AVIF</li>
        <li>Implement responsive images with srcset and sizes attributes</li>
        <li>Lazy-load images that are not in the initial viewport</li>
        <li>Consider LQIP (Low Quality Image Placeholders) for progressive loading</li>
      </ul>
      
      <h2>JavaScript Optimization</h2>
      <p>JavaScript is often the main cause of poor performance on modern websites:</p>
      <ul>
        <li>Split your JavaScript bundles and load non-critical scripts asynchronously</li>
        <li>Use tree-shaking to eliminate unused code</li>
        <li>Implement code-splitting to load only what's necessary for each page</li>
        <li>Consider using Intersection Observer for lazy-loading components</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Effective caching reduces server load and improves response times:</p>
      <ul>
        <li>Set appropriate cache headers for static assets</li>
        <li>Use service workers to cache resources and enable offline functionality</li>
        <li>Implement HTTP/2 server push for critical resources</li>
        <li>Consider a CDN for global content delivery</li>
      </ul>
      
      <h2>Server-Side Optimization</h2>
      <p>Backend performance is just as important as frontend optimization:</p>
      <ul>
        <li>Optimize database queries</li>
        <li>Implement server-side caching</li>
        <li>Consider static site generation where appropriate</li>
        <li>Use HTTP/2 or HTTP/3 to allow multiplexing</li>
      </ul>
      
      <h2>Mobile Optimization</h2>
      <p>With mobile traffic exceeding desktop for many websites, mobile performance optimization is crucial:</p>
      <ul>
        <li>Use responsive design principles</li>
        <li>Minimize network requests</li>
        <li>Optimize touch interactions</li>
        <li>Test on actual devices, not just emulators</li>
      </ul>
      
      <h2>Measuring and Monitoring</h2>
      <p>Performance optimization is an ongoing process that requires consistent measurement:</p>
      <ul>
        <li>Use tools like Lighthouse, WebPageTest, and Google PageSpeed Insights</li>
        <li>Implement Real User Monitoring (RUM) to collect field data</li>
        <li>Set up performance budgets and automated testing</li>
        <li>Monitor Core Web Vitals through Google Search Console</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is not a one-time effort but a continuous process of improvement. By focusing on these key areas and regularly measuring your progress, you can create websites that not only rank higher in search engines but also provide a superior user experience that keeps visitors engaged and converts more effectively.</p>
    `,
  },
];

type BlogPost = (typeof blogPosts)[0];

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(null);

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
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

  useEffect(() => {
    // In a real app, you would fetch this from an API
    const foundPost = blogPosts.find((post) => post.id === slug);
    if (foundPost) {
      setPost(foundPost);
      // Set the content
      if (contentRef.current) {
        contentRef.current.innerHTML = foundPost.content;
      }
    } else {
      // Handle post not found
      router.push("/blog");
    }
    setLoading(false);
  }, [slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
          Post not found
        </h1>
        <Button
          onClick={() => router.push("/blog")}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <section
      ref={targetRef}
      className="bg-slate-50 dark:bg-slate-900 relative w-full min-h-screen pt-16 pb-20"
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

      <div className="container mx-auto px-4 pt-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Back button */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Button
              onClick={() => router.push("/blog")}
              variant="ghost"
              className="group flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft
                size={18}
                className="mr-2 transition-transform group-hover:-translate-x-1"
              />
              Back to Blog
            </Button>
          </motion.div>

          {/* Hero section */}
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">
                {post.category}
              </span>
              <span className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </span>
              <span className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              {post.excerpt}
            </p>

            {/* Author info */}
            <div className="flex items-center mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-medium text-slate-800 dark:text-white">
                  {post.author.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {post.author.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            variants={fadeIn}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Social sharing */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 mb-10"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 rounded-full"
            >
              <Share2 size={16} />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 rounded-full"
            >
              <Bookmark size={16} />
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 rounded-full"
            >
              <Heart size={16} />
              Like
            </Button>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            className="prose prose-lg dark:prose-invert prose-headings:text-slate-800 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none mb-12"
            ref={contentRef}
          >
            {/* Content is injected via useEffect */}
          </motion.div>

          {/* Post navigation */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-slate-200 dark:border-slate-700 pt-8"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center md:justify-start"
                onClick={() => {
                  const currentIndex = blogPosts.findIndex(
                    (p) => p.id === post.id
                  );
                  const prevPost = blogPosts[currentIndex - 1];
                  if (prevPost) {
                    router.push(`/blog/${prevPost.id}`);
                  }
                }}
                disabled={blogPosts.findIndex((p) => p.id === post.id) === 0}
              >
                <ArrowLeft size={18} className="mr-2" />
                Previous Post
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center md:justify-end"
                onClick={() => {
                  const currentIndex = blogPosts.findIndex(
                    (p) => p.id === post.id
                  );
                  const nextPost = blogPosts[currentIndex + 1];
                  if (nextPost) {
                    router.push(`/blog/${nextPost.id}`);
                  }
                }}
                disabled={
                  blogPosts.findIndex((p) => p.id === post.id) ===
                  blogPosts.length - 1
                }
              >
                Next Post
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Related posts */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(
                  (relatedPost) =>
                    relatedPost.id !== post.id &&
                    relatedPost.category === post.category
                )
                .slice(0, 2)
                .map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    onClick={() => router.push(`/blog/${relatedPost.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex justify-end">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="mb-6">
              Subscribe to my newsletter to get notified about new content
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
