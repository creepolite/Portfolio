"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full h-screen  bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      </div>
      <BackgroundBeams />
    </div>
  );
}
