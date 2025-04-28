"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={heroRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Developing
            </span> Solutions That Make An Impact
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-300">
            I build innovative digital experiences that transform ideas into powerful solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-700">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
