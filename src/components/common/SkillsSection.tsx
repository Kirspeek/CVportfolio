import React from "react";
import AboutInfoBox from "./AboutInfoBox";

type SkillsSectionProps = {
  style?: React.CSSProperties;
  variant?: "card" | "simple";
};

const palette = [
  "#81a1ff",
  "#ecec84",
  "#ffb69b",
  "#ffacbb",
  "#8bc3e5",
  "#c8bcff",
  "#7ccaae",
];

const categories: Array<{ title: string; items: string[] }> = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Vue.js",
      "React libraries",
      "HTML/CSS",
      "Tailwind CSS",
      "Bootstrap",
      "React Router",
      "React Query",
      "Zod",
      "React Hook Form",
      "Radix UI",
      "Material UI (MUI)",
      "Framer Motion",
      "Next.js App Router",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "SQL",
      "NoSQL",
      "SQLite",
      "MongoDB",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "GraphQL (Apollo)",
      "Auth.js (NextAuth)",
    ],
  },
  {
    title: "Tools",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Git",
      "VS Code",
      "Storybook",
      "Unit testing",
      "Monorepo",
      "Postman",
      "Insomnia",
      "MongoDB Compass",
      "AI basics",
      "Testing Library",
      "Vitest",
      "Playwright",
      "MSW",
      "GitHub Actions",
      "Sentry",
      "Vite",
  
    ],
  },
  {
    title: "Languages",
    items: [
      "English (C2)",
      "Ukrainian (n)",
      "Russian (n)",
      "Polish (B2)",
      "Italian (B1)",
    ],
  },
];

export default function SkillsSection({
  style,
  variant = "card",
}: SkillsSectionProps) {
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
          Skills
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
      <div style={{ padding: "1rem" }}>
        <h3
          className="m-0"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          Skills
        </h3>

        <div className="mt-3 space-y-3">
          {categories.map((group, gi) => {
            const isLanguages = group.title === "Languages";
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
                <div
                  className="flex flex-wrap"
                  style={{ gap: isLanguages ? 4 : 6, padding: "0 3px" }}
                >
                  {group.items.map((label, i) => (
                    <div
                      key={`${group.title}-${label}`}
                      className="rounded-[3px]"
                      style={{
                        background: palette[(gi + i) % palette.length],
                        opacity: 0.9,
                      }}
                    >
                      <span
                        className="block"
                        style={{
                          margin: 0,
                          fontSize: isLanguages ? 12 : 13,
                          lineHeight: 1,
                          textShadow: "2px 2px 0px #ffffff",
                          textTransform: "capitalize",
                          fontWeight: 600,
                          padding: isLanguages ? 8 : 9,
                          color: "#000",
                          boxShadow:
                            "0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08)",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AboutInfoBox>
  );
}
