"use client";
// components/Footer.tsx
import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-slate-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Brand section - always visible */}
        <div className="sm:hidden mb-6">
          <Link
            href="/"
            className="text-xl font-bold text-blue-400 mb-3 inline-block"
          >
            DevPortfolio
          </Link>
          <p className="text-slate-300 mb-3 max-w-md text-xs sm:text-sm">
            Building innovative digital solutions that transform ideas into
            powerful products. Let's create something amazing together.
          </p>
          <div className="flex space-x-3 mb-4 sm:mb-0">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Desktop view - normal grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Brand description in left column */}
          {/* Brand section - always visible */}
          <div className=" mb-6">
            <Link
              href="/"
              className="text-xl font-bold text-blue-400 mb-3 inline-block"
            >
              DevPortfolio
            </Link>
            <p className="text-slate-300 mb-3 max-w-md ">
              Building innovative digital solutions that transform ideas into
              powerful products. Let's create something amazing together.
            </p>
            <div className="flex space-x-3 mb-4 sm:mb-0">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-2 text-white">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-1">
              <Link
                href="/"
                className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>contact@devportfolio.com</span>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Mobile view - collapsible sections */}
        <div className="md:hidden border-t border-slate-800 pt-2">
          {/* Quick Links collapsible section */}
          <div className="border-b border-slate-800">
            <button
              className="w-full py-3 flex justify-between items-center text-left"
              onClick={() => toggleSection("links")}
              aria-expanded={openSection === "links"}
            >
              <span className="font-bold text-white">Quick Links</span>
              {openSection === "links" ? (
                <ChevronUp size={20} className="text-slate-400" />
              ) : (
                <ChevronDown size={20} className="text-slate-400" />
              )}
            </button>
            {openSection === "links" && (
              <div className="pb-3">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-slate-300 hover:text-white transition-colors block"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-slate-300 hover:text-white transition-colors block"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-slate-300 hover:text-white transition-colors block"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-slate-300 hover:text-white transition-colors block"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-slate-300 hover:text-white transition-colors block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Info collapsible section */}
          <div className="border-b border-slate-800">
            <button
              className="w-full py-3 flex justify-between items-center text-left"
              onClick={() => toggleSection("contact")}
              aria-expanded={openSection === "contact"}
            >
              <span className="font-bold text-white">Contact Info</span>
              {openSection === "contact" ? (
                <ChevronUp size={20} className="text-slate-400" />
              ) : (
                <ChevronDown size={20} className="text-slate-400" />
              )}
            </button>
            {openSection === "contact" && (
              <div className="pb-3">
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2 flex-shrink-0" />
                    <span>contact@devportfolio.com</span>
                  </li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            )}
          </div>

          {/* About collapsible section */}
          <div className="border-b border-slate-800">
            <button
              className="w-full py-3 flex justify-between items-center text-left"
              onClick={() => toggleSection("about")}
              aria-expanded={openSection === "about"}
            >
              <span className="font-bold text-white">About</span>
              {openSection === "about" ? (
                <ChevronUp size={20} className="text-slate-400" />
              ) : (
                <ChevronDown size={20} className="text-slate-400" />
              )}
            </button>
            {openSection === "about" && (
              <div className="pb-3">
                <p className="text-slate-300">
                  Building innovative digital solutions that transform ideas
                  into powerful products. Let's create something amazing
                  together.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
