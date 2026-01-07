import React from "react";
import AboutInfoBox from "./AboutInfoBox";
import type {
  WorkExperienceSectionProps,
  Job,
  WorkExperienceDataFile,
  TextsData,
} from "../types";
import workExperienceData from "../data/work-experience.json";
import textsData from "../data/texts.json";

const jobs: Job[] = (workExperienceData as WorkExperienceDataFile).jobs;

export default function WorkExperienceSection({
  id = "experience",
  style,
}: WorkExperienceSectionProps) {
  const workExp = (textsData as TextsData).workExperience;

  return (
    <section id={id}>
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
            {workExp.title}
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
                {workExp.now.label}
              </div>
              <div style={{ borderTop: "1px dashed #ff6b4a", flex: 1 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                {workExp.now.next}
              </span>
            </div>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

            {jobs.map((job) => (
              <div key={`${job.company}-${job.title}`}>
                <div
                  className="py-3 flex flex-col gap-3 sm:grid sm:grid-cols-[130px_1fr] sm:gap-4 sm:items-baseline"
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
                    <ul className="mt-1 space-y-1" style={{ paddingLeft: 0 }}>
                      {job.bullets.map((b, index) => (
                        <li
                          key={index}
                          style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
                        >
                          <span style={{ color: "#ff6b4a", marginRight: 6 }}>▹</span>
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
    </section>
  );
}

