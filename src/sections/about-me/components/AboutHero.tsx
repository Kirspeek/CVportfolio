"use client";

import React from "react";
import { useAboutResponsive } from "../hooks/useAboutResponsive";
import textsData from "../data/texts.json";
import type { TextsData } from "../types";

export default function AboutHero() {
  const { isSmallMobile, isTinyMobile, isTablet } = useAboutResponsive();
  const hero = (textsData as TextsData).hero;

  return (
    <div className="relative flex items-start md:min-h-[70vh] lg:min-h-screen md:items-center">
      {!isSmallMobile ? (
        <div
          className="absolute top-2 left-0 right-0 grid grid-cols-3 text-[10px] sm:text-xs text-[var(--primary-text)] px-6"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
        >
          <div className="flex flex-col gap-1">
            <span>{hero.meta.left.text}</span>
            <a
              href={hero.meta.left.link.href}
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              {hero.meta.left.link.text}
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>
              {hero.meta.center.text}
              <br className="hidden sm:block" /> {hero.meta.center.textLine2}
            </span>
            <a
              href={hero.meta.center.link.href}
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              {hero.meta.center.link.text}
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span>
              {hero.meta.right.text}
              <br className="hidden sm:block" /> {hero.meta.right.textLine2}
              <br /> {hero.meta.right.textLine3}
            </span>
            <a
              href={hero.meta.right.link.href}
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              {hero.meta.right.link.text}
            </a>
          </div>
        </div>
      ) : null}

      <div className="w-full px-0 sm:px-6">
        <div
          className="name-block"
          style={{
            lineHeight: isSmallMobile
              ? "clamp(2.4rem, 9vw, 3.9rem)"
              : isTablet
                ? "clamp(2.3rem, 7vw, 4.9rem)"
                : "clamp(2rem, 6vw, 7rem)",
            padding: isSmallMobile
              ? "2.6rem 0 0.5rem"
              : isTablet
                ? "5.4rem 0 2rem"
                : "9.4rem 0",
            position: "relative",
            display: "inline-block",
            width: "auto",
            marginLeft: isSmallMobile ? (isTinyMobile ? 0 : "auto") : 0,
            marginRight: isSmallMobile ? (isTinyMobile ? 0 : "auto") : 0,
          }}
        >
          <span
            className="uppercase"
            style={{
              position: "absolute",
              left: isSmallMobile ? "0.2rem" : "0.8rem",
              top: isSmallMobile ? "-0.9rem" : isTablet ? "-1.2rem" : "5rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.2em",
              color: "#808080",
              fontSize: isSmallMobile ? "0.85rem" : "0.75rem",
            }}
          >
            {hero.greeting}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#808080",
              fontSize: isSmallMobile
                ? "clamp(2.6rem, 10.5vw, 4.25rem)"
                : isTablet
                  ? "clamp(2.4rem, 7.5vw, 5.2rem)"
                  : "clamp(2.25rem, 9vw, 12rem)",
              letterSpacing: isTablet ? "2px" : "3px",
              margin: 0,
              textAlign: isSmallMobile
                ? isTinyMobile
                  ? "left"
                  : "center"
                : "left",
            }}
          >
            {hero.name}
          </h1>
        </div>
        <h2
          className="uppercase font-extrabold tracking-widest"
          style={{
            color: "#ff6b4a",
            fontSize: isSmallMobile
              ? "clamp(1.5rem, 7vw, 3rem)"
              : isTablet
                ? "clamp(1.2rem, 4.5vw, 2.6rem)"
                : "clamp(1.25rem, 5vw, 4rem)",
            fontFamily: "var(--font-mono)",
            textAlign: isSmallMobile
              ? isTinyMobile
                ? "left"
                : "center"
              : "left",
          }}
        >
          {hero.title}
        </h2>
        <p
          className="mt-3 md:mt-6 uppercase secondary-text"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: isSmallMobile
              ? "clamp(1.05rem, 3.6vw, 1.8rem)"
              : "clamp(0.9rem, 2.5vw, 2rem)",
            letterSpacing: "0.05em",
            textAlign: isSmallMobile
              ? isTinyMobile
                ? "left"
                : "center"
              : "left",
          }}
        >
          {hero.tagline}
        </p>
      </div>
    </div>
  );
}

