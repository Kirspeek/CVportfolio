"use client";

import { useState, useEffect, useCallback } from "react";
import { HeaderWidget } from "@/components/widgets";
import { AboutSection, ProjectsSection, ContactForm } from "@/sections/about-me";
import CodeTypingAnimation from "@/sections/about-me/components/CodeTypingAnimation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "about" | "experience" | "projects" | "contact"
  >("about");

  useEffect(() => {
    const checkMobile = () => {
      const isPhone = window.innerWidth <= 425;
      setIsMobile(isPhone);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Scroll to about section on initial load
      const hash = window.location.hash;
      if (!hash || hash === "#") {
        setTimeout(() => {
          const aboutEl = document.getElementById("about");
          if (aboutEl) {
            aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, []);

  const handleSectionChange = useCallback((
    s: "about" | "experience" | "projects" | "contact"
  ) => {
    if (typeof window !== "undefined") {
      if (s === "experience") {
        const experienceEl = document.getElementById("experience");
        if (experienceEl) {
          requestAnimationFrame(() => {
            experienceEl.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        } else {
          const aboutEl = document.getElementById("about");
          if (aboutEl) {
            requestAnimationFrame(() => {
              aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          }
        }
        setActiveSection("about");
      } else {
        const el = document.getElementById(s);
        if (el) {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }
        setActiveSection(s);
      }
    }
  }, []);

  if (isMobile) {
    return (
      <div className="flex min-h-screen bg-[var(--background)]">
        <div className="flex-1 flex flex-col overflow-hidden">
          <HeaderWidget
            defaultSection={activeSection}
            onSectionChange={handleSectionChange}
            sections={[
              { key: "about", label: "About me" },
              { key: "experience", label: "Experience" },
              { key: "projects", label: "Projects" },
              { key: "contact", label: "Contact" },
            ]}
          />

          <main className="flex-1 overflow-y-auto px-6 py-8 bg-[var(--background)]">
            <div className="max-w-5xl mx-auto space-y-12">
              <AboutSection id="about" />
              <ProjectsSection id="projects" />
              <ContactForm id="contact" />
              <CodeTypingAnimation
                style={{
                  width: "100%",
                  margin: "24px auto 32px",
                  display: "block",
                  minHeight: "60px",
                  padding: "12px",
                  fontSize: "12px",
                }}
              />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto px-0 py-0 bg-[var(--background)]">
          <div>
            {/* Header overlaid on top */}
            <div className="absolute top-0 right-0 left-0 z-50 px-0 pt-4">
              <HeaderWidget
                defaultSection={activeSection}
                onSectionChange={handleSectionChange}
                sections={[
                  { key: "about", label: "About me" },
                  { key: "experience", label: "Experience" },
                  { key: "projects", label: "Projects" },
                  { key: "contact", label: "Contact" },
                ]}
              />
            </div>

            <div className="space-y-12">
              <AboutSection id="about" />
              <ProjectsSection id="projects" />
              <ContactForm id="contact" />
              <CodeTypingAnimation
                style={{
                  width: "min(980px, 96vw)",
                  margin: "48px auto 60px",
                  display: "block",
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
