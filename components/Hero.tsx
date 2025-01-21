"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "AI-Powered Creativity",
    description:
      "Bring your ideas to life with advanced AI that crafts compelling stories tailored to your unique vision and style.",
  },
  {
    title: "Personalized Narratives",
    description:
      "Shape every detail of your story—tone, genre, and length—for a truly customized and memorable experience.",
  },
  {
    title: "Effortless Storytelling",
    description:
      "Enjoy a smooth and intuitive platform designed for creators of all levels, making storytelling simple and fun.",
  },
  {
    title: "Professional-Grade Results",
    description:
      "Create polished, engaging stories ready to captivate audiences or bring your creative projects to life.",
  },
];

export function Hero() {
  return (
    <div>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Get To Know Us?
        </motion.h1>
      </HeroHighlight>
      <div className="p-7">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
