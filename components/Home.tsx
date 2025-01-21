"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function Home() {
  return (
    <div>
      {/* Ensure backgrounds do not interfere with pointer events */}
      <div className="absolute inset-0 pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>

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
          Where Imagination Meets Innovation <br />
          <Highlight className="text-black dark:text-white">
            StoryCraft AI
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral-50 dark:text-neutral-200 text-xs sm:text-base my-10">
          Craft compelling, personalized narratives effortlessly with our
          AI-driven storytelling platform, designed to bring your ideas to life.
        </p>
        <div className="flex flex-col md:flex-row md:space-y-0 space-x-0 md:space-x-4">
          <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </Button>
          <Button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
