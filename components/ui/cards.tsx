"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        "transition-all duration-500"
      )}
    > 
      <div className="text relative z-50">
        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
          {title}
        </h1>
        <p className="font-normal text-base text-gray-50 relative my-4">
          {description}
        </p>
      </div>
    </div>
  );
}
