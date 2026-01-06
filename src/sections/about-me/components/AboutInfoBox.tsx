import React from "react";
import "../styles/RetroComputer.css";
import type { AboutInfoBoxProps } from "../types";

export default function AboutInfoBox({
  style,
  children,
  className,
}: AboutInfoBoxProps) {
  return (
    <div className={`retro-card ${className ?? ""}`.trim()} style={style}>
      {children}
    </div>
  );
}

