"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    
  {
    id: 1,
    name: "Muhammad Zaeem",
    designation: "Student",
    image:
      "/mzaeem.jpg"
  },
  {
    id: 2,
    name: "Mian Asif Langrah",
    designation: "Course Instructor",
    image:
      "/asiflangrah.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center pb-12 pt-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
    
  );
}
