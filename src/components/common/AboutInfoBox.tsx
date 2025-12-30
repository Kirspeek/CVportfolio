import React from "react";

export type AboutInfoBoxProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

/**
 * AboutInfoBox
 * A presentational container that matches the retro parent card styling
 * used beside the computer. Content can be passed via children.
 */
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
