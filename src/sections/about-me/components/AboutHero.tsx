"use client";

import React from "react";
import textsData from "../data/texts.json";
import type { TextsData } from "../types";

export default function AboutHero() {
  const hero = (textsData as TextsData).hero;

  return (
    <div className="relative flex items-start justify-start md:items-center min-h-[70vh] lg:min-h-screen w-full">
      {/* Meta Information - Hidden on small mobile, visible on larger screens */}
      {/* Using standard Tailwind breakpoints: hidden by default, block on sm/md */}
      <div className="hidden sm:grid absolute top-24 left-0 right-0 grid-cols-3 text-xs text-[var(--primary-text)] px-6 font-mono tracking-wider z-10">
        <div className="flex flex-col gap-1">
          <span>{hero.meta.left.text}</span>
          <a
            href={hero.meta.left.link.href}
            className="hover:text-[var(--primary-text)] transition-colors opacity-70 hover:opacity-100"
          >
            {hero.meta.left.link.text}
          </a>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span>
            {hero.meta.center.text}
            <br className="hidden sm:block" /> {hero.meta.center.textLine2}
          </span>
          <a
            href={hero.meta.center.link.href}
            className="hover:text-[var(--primary-text)] transition-colors opacity-70 hover:opacity-100"
          >
            {hero.meta.center.link.text}
          </a>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span>
            {hero.meta.right.text}
            <br className="hidden sm:block" /> {hero.meta.right.textLine2}
            <br /> {hero.meta.right.textLine3}
          </span>
          <a
            href={hero.meta.right.link.href}
            className="hover:text-[var(--primary-text)] transition-colors opacity-70 hover:opacity-100"
          >
            {hero.meta.right.link.text}
          </a>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 flex flex-col justify-center">
        {/* Name Block */}
        {/* 
            Replacements for clamp values:
            Small mobile: text-4xl / 5xl
            Tablet: text-6xl / 7xl
            Desktop: text-8xl / 9xl
        */}
        <div className="relative inline-block w-full sm:w-auto py-10 sm:py-20 lg:py-20">
          <span
            className="absolute left-1 -top-2 sm:-top-3 md:-top-4 lg:top-20 font-mono text-[0.7rem] sm:text-xs tracking-[0.2em] text-[#808080] uppercase"
          >
            {hero.greeting}
          </span>

          <h1 className="font-mono font-semibold uppercase animate-name-color text-[clamp(2.6rem,10.5vw,4.25rem)] md:text-[clamp(2.4rem,7.5vw,5.2rem)] lg:text-[clamp(2.25rem,9vw,12rem)] tracking-[3px] md:tracking-[2px] m-0 text-left md:text-center lg:text-left">
            {hero.name}
          </h1>
        </div>

        {/* Footer Info (Job Title + Tagline) - Positioned at bottom */}
        <div className="absolute bottom-10 left-4 sm:left-6 right-4 sm:right-6">
          <h2 className="uppercase font-extrabold tracking-widest font-mono text-[#ff6b4a] text-left text-[7vw] sm:text-[5vw] lg:text-[4rem] leading-tight m-0">
            {hero.title}
          </h2>

          <p className="mt-0 uppercase secondary-text font-mono tracking-wide text-left text-[4vw] sm:text-[2.5vw] lg:text-[1.5rem] leading-tight max-w-4xl">
            {hero.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

