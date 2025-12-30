import React from "react";
import AboutInfoBox from "./AboutInfoBox";

type WorkExperienceSectionProps = {
  style?: React.CSSProperties;
};

type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    title: "Senior React/Node Developer",
    company: "Zazmic Inc",
    location: "California, United States",
    type: "Full‑Time",
    period: "10/2025 – now",
    bullets: [
      "Developing scalable web applications using React and Node.js",
      "Building responsive and performant user interfaces",
      "Implementing backend services and APIs",
      "Collaborating with cross-functional teams to deliver high-quality solutions",
    ],
  },
  {
    title: "Lead Front‑End Developer",
    company: "Buildeezy",
    location: "Singapore",
    type: "Full‑Time",
    period: "08/2024 – 07/2025",
    bullets: [
      "Head Frontend role for a modern web app focused on responsive, user‑friendly interfaces",
      "Integrated payments, messaging, social features, notifications and DB‑driven modules",
      "Directed platform development across FE/BE, planning and delivery",
      "Designed and implemented key user‑facing components with accessibility and performance in mind",
      "Assigned work, reviewed PRs, ensured quality and cadence across the team",
      "Contributed from concept to release to deliver a fully functional platform",
    ],
  },
  {
    title: "Full‑Stack Developer",
    company: "Admixer Technologies",
    location: "Ukraine",
    type: "Full‑Time",
    period: "04/2022 – 06/2024",
    bullets: [
      "Full‑stack development and support of multiple company products",
      "Architecture design for new Back‑End and Front‑End frameworks",
      "Integration of new frameworks into existing products",
      "Development of internal DMP interface",
    ],
  },
  {
    title: "Software Engineer",
    company: "Infopulse",
    location: "Kyiv, Ukraine",
    type: "Full‑Time",
    period: "12/2020 – 04/2022",
    bullets: [
      "Contributed to scalable systems for clients in Western Europe",
      "Leveraged cloud services and monitoring to meet business needs",
      "Completed internship and shipped features aligned with client requirements",
    ],
  },
];

export default function WorkExperienceSection({
  style,
}: WorkExperienceSectionProps) {
  return (
    <AboutInfoBox
      style={{ width: "min(980px,96vw)", margin: "12px auto 0", ...style }}
    >
      <div className="p-4 sm:p-6 md:p-8">
        <h3
          className="m-0"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          Work Experience
        </h3>
        <div
          className="mt-2"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        />

        <div className="mt-4 space-y-0">
          <div className="flex items-center gap-2 opacity-70 py-3">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                opacity: 0.8,
                fontSize: 12,
              }}
            >
              now
            </div>
            <div style={{ borderTop: "1px dashed #ff6b4a", flex: 1 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
              Your company — next
            </span>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

          {jobs.map((job) => (
            <div key={`${job.company}-${job.title}`}>
              <div
                className="py-3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "130px 1fr",
                  gap: 12,
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    opacity: 0.8,
                    fontSize: 12,
                  }}
                >
                  {job.period}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {job.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      opacity: 0.85,
                      fontSize: 12,
                    }}
                  >
                    {job.company} — {job.location} — {job.type}
                  </div>
                  {/* Stack removed: skills are now consolidated in the Skills section */}
                  <ul className="mt-1" style={{ paddingLeft: 14 }}>
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
            </div>
          ))}
        </div>
      </div>
    </AboutInfoBox>
  );
}
