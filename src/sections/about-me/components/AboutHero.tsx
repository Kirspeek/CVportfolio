"use client";

import React, { useState, useEffect } from "react";
import textsData from "../data/texts.json";
import type { TextsData } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { useAboutResponsive } from "../hooks/useAboutResponsive";

const TAGLINE_VARIANTS = [
  "BUILDING EXCEPTIONAL DIGITAL PLATFORMS.",
  "CRAFTING PIXEL-PERFECT WEB EXPERIENCES.",
  "DELIVERING SCALABLE FULL-STACK SOLUTIONS."
];

export default function AboutHero() {
  const hero = (textsData as TextsData).hero;
  const [currentName, setCurrentName] = useState("IRYNA");
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const { isSmallMobile, isTablet } = useAboutResponsive();

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setCurrentName((prev) => (prev === "IRYNA" ? "KIRA" : "IRYNA"));
    }, 4000);

    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % TAGLINE_VARIANTS.length);
    }, 5000);

    return () => {
      clearInterval(nameInterval);
      clearInterval(taglineInterval);
    };
  }, []);

  // Shared Components
  const MetaInfo = ({ className }: { className?: string }) => (
    <div className={`grid grid-cols-3 text-xs text-[var(--primary-text)] font-mono tracking-wider z-10 ${className}`}>
      <div className="flex flex-col gap-1 text-left">
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
  );

  const NameBlock = ({ className, center = false }: { className?: string; center?: boolean }) => (
    <div className={`relative inline-block w-full sm:w-auto ${className}`}>
      <span
        className={`absolute font-mono text-[0.7rem] sm:text-xs tracking-[0.2em] text-[#808080] uppercase ${center
          ? "left-1/2 -translate-x-1/2 -top-6 sm:-top-8"
          : "left-1 -top-2 sm:-top-3 md:-top-4 lg:-top-3"
          }`}
      >
        {hero.greeting}
      </span>

      <h1 className={`font-mono font-semibold uppercase animate-name-color 
        text-[clamp(2.6rem,10.5vw,4.25rem)] md:text-[clamp(2.4rem,7.5vw,5.2rem)] lg:text-[clamp(2.25rem,9vw,12rem)] 
        tracking-[3px] md:tracking-[2px] m-0 
        flex flex-col md:flex-row md:items-baseline flex-wrap
        ${center ? "items-center text-center md:justify-center" : "text-left md:text-center lg:text-left lg:justify-start"}`}
      >
        <motion.span
          layout
          className="inline-flex h-[1.2em] overflow-hidden items-baseline leading-none mr-3 md:mr-5 lg:mr-8 relative"
          style={{ width: 'auto' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={currentName}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="block text-left"
            >
              {currentName}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        <motion.span layout className="leading-none">CHER</motion.span>
      </h1>
    </div>
  );

  const FooterBlock = ({ className }: { className?: string }) => (
    <div className={className}>
      <h2 className="uppercase font-extrabold tracking-widest font-mono text-[#ff6b4a] text-left text-[7vw] sm:text-[5vw] lg:text-[4rem] leading-tight m-0">
        {hero.title}
      </h2>

      <div className="mt-1 uppercase secondary-text font-mono tracking-wide text-left text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5rem] leading-tight max-w-4xl flex flex-col sm:block">
        <span className="mr-2 sm:mr-3 mb-1 sm:mb-0 block sm:inline">SPECIALIZED IN</span>
        <motion.span
          layout
          className="inline-block sm:inline-flex relative align-bottom align-text-bottom"
          style={{ width: 'auto' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={TAGLINE_VARIANTS[currentTaglineIndex]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="block text-left whitespace-normal sm:whitespace-nowrap"
            >
              {TAGLINE_VARIANTS[currentTaglineIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </div>
    </div>
  );

  // --- RENDER STRATEGIES ---

  // 1. Mobile: Default vertical flow
  const renderMobile = () => (
    <div className="relative flex flex-col justify-center min-h-[70vh] w-full px-4 pt-20 pb-10">
      {/* Meta info hidden on small mobile usually, but if needed we can show it. 
           Text says "Hidden on small mobile", so we skip MetaInfo here or make it hidden. */}
      <div className="flex-1 flex flex-col justify-center">
        <NameBlock />
      </div>
      <div className="mt-8">
        <FooterBlock />
      </div>
    </div>
  );


  const renderTablet = () => (
    <div className="flex flex-col min-h-[60vh] w-full px-6 pt-32 pb-10 gap-12 sm:pt-40">
      <MetaInfo className="w-full" />

      <div className="flex-1 flex flex-col justify-center items-center py-10">
        <NameBlock center />
      </div>

      <div className="w-full">
        <FooterBlock />
      </div>
    </div>
  );

  // 3. Desktop: Original Artistic Absolute Layout
  const renderDesktop = () => (
    <div className="relative flex items-center min-h-screen w-full">
      <div className="absolute top-24 left-0 right-0 px-6 z-10">
        <MetaInfo />
      </div>

      <div className="w-full px-6 flex flex-col justify-center xl:justify-start">
        <NameBlock />
      </div>

      <div className="absolute bottom-10 left-6 right-6">
        <FooterBlock />
      </div>
    </div>
  );

  if (isSmallMobile) return renderMobile();
  if (isTablet) return renderTablet();
  return renderDesktop();
}
