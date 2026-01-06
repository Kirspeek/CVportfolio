"use client";

import React, { useEffect, useState } from "react";
import textsData from "../data/texts.json";
import RetroComputer from "./RetroComputer";
import type { AboutDescriptionProps, TextsData } from "../types";

export default function AboutDescription({ variant = "mobile" }: AboutDescriptionProps) {
  const description = (textsData as TextsData).about.description;
  const items = description.items[variant] || description.items.mobile;
  
  const [codeIndex, setCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const codeSnippets = [
    "const skills = ['React', 'Next.js', 'TypeScript'];",
    "npm install --save-dev @types/react",
    "export default function Portfolio() {",
    "const { data } = useQuery(['projects']);",
    "async function buildProject() {",
    "const api = await fetch('/api/contact');",
    "import { useState, useEffect } from 'react';",
    "const theme = useTheme();",
    "const router = useRouter();",
    "const [state, dispatch] = useReducer(reducer);",
  ];

  useEffect(() => {
    const cycleCode = () => {
      setIsTyping(true);
      const currentCode = codeSnippets[codeIndex];
      let charIndex = 0;
      setDisplayedCode("");

      const typeInterval = setInterval(() => {
        if (charIndex < currentCode.length) {
          setDisplayedCode(currentCode.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
            }, 1000);
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    };

    const timer = setTimeout(cycleCode, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeIndex]);

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
          marginBottom: variant === "desktop" ? "2rem" : "1.5rem",
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

      {/* Animated Code Display */}
      <div
        style={{
          marginTop: "1.5rem",
          padding: "12px",
          background: "#1a1a1a",
          borderRadius: "4px",
          border: "1px solid #333",
          minHeight: "60px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "#33ff66",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            color: "#666",
            fontSize: "10px",
          }}
        >
          $&gt;
        </div>
        <div
          style={{
            marginLeft: "24px",
            wordBreak: "break-all",
            lineHeight: "1.6",
          }}
        >
          {displayedCode}
          {isTyping && (
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "14px",
                background: "#33ff66",
                marginLeft: "2px",
                animation: "blink 1s infinite",
              }}
            />
          )}
        </div>
        <style jsx>{`
          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

