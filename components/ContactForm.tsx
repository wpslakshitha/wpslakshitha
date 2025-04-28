"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Check, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => {
    setFocused(name);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6">
      <AnimatePresence mode="wait">
        {formStatus === "success" ? (
          <motion.div
            key="success"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={successVariants}
            className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 p-4 sm:p-8 rounded-xl text-center shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 dark:bg-green-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
            >
              <Check size={24} className="text-white sm:hidden" />
              <Check size={32} className="text-white hidden sm:block" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl font-bold mb-2"
            >
              Message sent successfully!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm"
            >
              Thanks for reaching out. I'll get back to you soon.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={formContainerVariants}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className={`h-10 sm:h-11 bg-slate-800 border-slate-700 text-white transition-all duration-300 text-sm ${
                      focused === "name"
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : ""
                    }`}
                    required
                  />
                  <AnimatePresence>
                    {focused === "name" && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={`h-10 sm:h-11 bg-slate-800 border-slate-700 text-white transition-all duration-300 text-sm ${
                      focused === "email"
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : ""
                    }`}
                    required
                  />
                </div>
              </motion.div>
            </div>
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="subject"
                className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus("subject")}
                onBlur={handleBlur}
                className={`h-10 sm:h-11 bg-slate-800 border-slate-700 text-white transition-all duration-300 text-sm ${
                  focused === "subject"
                    ? "border-blue-500 ring-2 ring-blue-500/20"
                    : ""
                }`}
                required
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                className={`min-h-24 sm:min-h-32 bg-slate-800 border-slate-700 text-white transition-all duration-300 text-sm ${
                  focused === "message"
                    ? "border-blue-500 ring-2 ring-blue-500/20"
                    : ""
                }`}
                required
              />
            </motion.div>
            <motion.div
              variants={formItemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        className="ml-2 relative"
                      >
                        <Send size={14} className="sm:hidden" />
                        <Send size={16} className="hidden sm:block" />
                      </motion.span>
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
