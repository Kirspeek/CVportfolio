"use client";

import React from "react";
import textsData from "../data/texts.json";
import RetroComputer from "./RetroComputer";
import type { AboutDescriptionProps, TextsData } from "../types";

export default function AboutDescription({ variant = "mobile" }: AboutDescriptionProps) {
  const description = (textsData as TextsData).about.description;
  const items = description.items[variant] || description.items.mobile;

  const textSizeClass =
    variant === "desktop"
      ? "text-[13px] sm:text-sm lg:text-base"
      : variant === "tablet"
        ? "text-sm"
        : "text-[13px]";

  const titleSizeClass =
    variant === "desktop"
      ? "text-sm sm:text-base lg:text-lg"
      : variant === "tablet"
        ? "text-base"
        : "text-sm";

  return (
    <div
      className="p-4 sm:p-6 md:p-8"
      style={{
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.02em",
        color: "var(--primary-text)",
        lineHeight: 1.6,
        textAlign: "left",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-5 w-1.5 rounded-full"
          style={{ background: "#ff6b4a" }}
        />
        <h3
          className={`m-0 ${titleSizeClass} font-extrabold tracking-widest`}
          style={{ textTransform: "uppercase" }}
        >
          {description.title}
        </h3>
      </div>
      <ul
        className={`${variant === "tablet" ? "mt-4" : "mt-3"} space-y-2`}
      >
        {items.map((item, index) => (
          <li key={index} className={textSizeClass}>
            <span style={{ color: "#ff6b4a" }}>▹</span> {item}
          </li>
        ))}
      </ul>

      {/* RetroComputer */}
      <div
        className="retro-computer-container"
        style={{
          marginTop: variant === "desktop" ? "2rem" : "1.5rem",
          marginBottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: variant === "desktop" ? "3rem" : "2.5rem",
            paddingBottom: variant === "desktop" ? "3rem" : "2.5rem",
            paddingLeft: variant === "desktop" ? "2rem" : "1.5rem",
            paddingRight: variant === "desktop" ? "2rem" : "1.5rem",
          }}
        >
          <div
            style={{
              transform:
                variant === "mobile"
                  ? "scale(0.7)"
                  : variant === "tablet"
                    ? "scale(0.8)"
                    : "scale(0.9)",
              transformOrigin: "center center",
            }}
          >
            <RetroComputer />
          </div>
        </div>
      </div>
    </div>
  );
}
