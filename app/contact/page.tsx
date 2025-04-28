"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Form submission handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactItemHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

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
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                Touch
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Contact info */}
            <motion.div className="w-full lg:w-1/3" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Feel free to reach out to me for any inquiries, project
                discussions, or just to say hello. I'm always open to new
                opportunities and collaborations.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"
                  variants={contactItemHover}
                  whileHover="hover"
                >
                  <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-lg mr-4">
                    <MapPin
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"
                  variants={contactItemHover}
                  whileHover="hover"
                >
                  <div className="p-3 bg-purple-50 dark:bg-slate-700 rounded-lg mr-4">
                    <Phone
                      className="text-purple-600 dark:text-purple-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      +94 123 456 789
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"
                  variants={contactItemHover}
                  whileHover="hover"
                >
                  <div className="p-3 bg-pink-50 dark:bg-slate-700 rounded-lg mr-4">
                    <Mail
                      className="text-pink-600 dark:text-pink-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                      Email
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      sachith@example.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md"
                  variants={contactItemHover}
                  whileHover="hover"
                >
                  <div className="p-3 bg-indigo-50 dark:bg-slate-700 rounded-lg mr-4">
                    <Globe
                      className="text-indigo-600 dark:text-indigo-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white mb-1">
                      Website
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      www.wpslakshitha.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - Contact form */}
            <motion.div className="w-full lg:w-2/3" variants={fadeInUp}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-300 rounded-lg"
                  >
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-800 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-800 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-800 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-800 dark:text-white resize-none"
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
