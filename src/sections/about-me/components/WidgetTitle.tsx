"use client";

import React from "react";
import type { WidgetTitleProps } from "../types";

export default function WidgetTitle({
  title,
  subtitle,
  className = "",
  variant = "default",
  size = "md",
}: WidgetTitleProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 425);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sizeClasses = {
    sm: {
      mobile: "text-sm",
      tablet: "text-base",
      desktop: "text-lg",
    },
    md: {
      mobile: "text-base",
      tablet: "text-lg",
      desktop: "text-xl",
    },
    lg: {
      mobile: "text-lg",
      tablet: "text-xl",
      desktop: "text-2xl",
    },
    xl: {
      mobile: "text-xl",
      tablet: "text-2xl",
      desktop: "text-3xl",
    },
  };

  const variantClasses = {
    default: "text-center",
    centered: "text-center",
    compact: "text-center mb-2",
  };

  const getSizeClass = () => {
    if (isMobile) return sizeClasses[size].mobile;
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      return sizeClasses[size].tablet;
    }
    return sizeClasses[size].desktop;
  };

  const getMarginBottom = () => {
    if (variant === "compact") return "mb-2";
    if (isMobile) return "mb-3";
    return "mb-4";
  };

  const getMobileTopMargin = () => {
    if (isMobile) return "mt-2";
    return "";
  };

  return (
    <div className={`${className}`}>
      <h3
        className={`
          font-semibold
          ${getSizeClass()}
          ${variantClasses[variant]}
          ${getMarginBottom()}
          ${getMobileTopMargin()}
          primary-text
        `}
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 900,
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={`
            text-sm secondary-text text-center mb-4
            ${isMobile ? "mt-1" : "mt-2"}
          `}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}


