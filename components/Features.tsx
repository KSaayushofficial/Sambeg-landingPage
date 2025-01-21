"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";
import { Card } from "./ui/cards";

function Features() {
  const features = [
    {
      id: 1,
      title: "Vast Library",
      description: "Access thousands of titles across multiple genres",
    },
    {
      id: 2,
      title: "High Quality Audio",
      description: "Crystal clear narration with premium sound quality",
    },
    {
      id: 3,
      title: "Offline Access",
      description: "Download books to listen anywhere, anytime",
    },
    {
      id: 4,
      title: "Smart Bookmarks",
      description: "Never lose your place with automatic bookmarking",
    },
  ];

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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          What We Offer?
        </motion.h1>
      </HeroHighlight>
      <section className="container py-24">
        <div className="grid gap-3  mx-auto sm:grid-cols-2 lg:grid-cols-4 ml-[5rem]">
          {features.map((feature) => (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
