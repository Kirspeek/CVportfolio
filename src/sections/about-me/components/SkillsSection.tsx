import React from "react";
import AboutInfoBox from "./AboutInfoBox";
import type {
  SkillsSectionProps,
  SkillCategory,
  SkillsDataFile,
  TextsData,
} from "../types";
import skillsData from "../data/skills.json";
import textsData from "../data/texts.json";

const palette = (skillsData as SkillsDataFile).palette;
const categories: SkillCategory[] = (skillsData as SkillsDataFile).categories;

export default function SkillsSection({
  style,
  variant = "card",
}: SkillsSectionProps) {
  const skills = (textsData as TextsData).skills;

  if (variant === "simple") {
    return (
      <div style={{ width: "min(980px,96vw)", margin: "8px auto 0", ...style }}>
        <h3
          className="m-0"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          {skills.title}
        </h3>
        <div
          className="mt-2"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        />

        <div className="mt-3 space-y-3">
          {categories.map((group) => {
            return (
              <div key={group.title} className="space-y-2">
                <h4
                  className="m-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--primary-text)",
                    fontSize: 14,
                  }}
                >
                  {group.title}
                </h4>
                <div className="flex flex-wrap" style={{ gap: 6 }}>
                  {group.items.map((label) => (
                    <span
                      key={`${group.title}-${label}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        padding: "6px 8px",
                        border: "1px solid #e3e3e3",
                        borderRadius: 4,
                        background: "#f9f9f9",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


  return (
    <AboutInfoBox
      style={{
        width: "min(980px, 96vw)",
        margin: "8px auto 0",
        ...style,
      }}
    >
      <div style={{ padding: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
        <h3
          className="m-0"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          {skills.title}
        </h3>

        <div className="mt-3 space-y-4">
          {categories.map((group) => {
            let colorIndex = 0;
            return (
              <div key={group.title} className="space-y-0">
                <h4
                  className="m-0 mb-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--primary-text)",
                    fontSize: 14,
                  }}
                >
                  {group.title}
                </h4>
                <div className="space-y-0">
                  {group.items.map((label) => {
                    const bgColor = palette[colorIndex % palette.length];
                    colorIndex++;
                    return (
                      <div
                        key={`${group.title}-${label}`}
                        style={{
                          background: bgColor,
                          padding: "6px 12px",
                          marginBottom: "1px",
                          marginLeft: "-1rem",
                          marginRight: "-1rem",
                          paddingLeft: "1rem",
                          paddingRight: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#000",
                            textTransform: "capitalize",
                            display: "block",
                            lineHeight: 1.2,
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AboutInfoBox>
  );
}

