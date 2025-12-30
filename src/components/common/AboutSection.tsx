"use client";

import React from "react";
import WidgetTitle from "./WidgetTitle";
import { useMobileDetection } from "./useMobileDetection";
import { ABOUT } from "@/data/about";
import RetroComputer from "./RetroComputer";
import AboutInfoBox from "./AboutInfoBox";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";

type AboutSectionProps = {
  id?: string;
};

export default function AboutSection({ id = "about" }: AboutSectionProps) {
  const isSmallMobile = useMobileDetection(640);
  const isTinyMobile = useMobileDetection(375);
  const isTablet = useMobileDetection(1024) && !isSmallMobile;

  const AboutHero = () => (
    <div className="relative flex items-start md:min-h-[70vh] lg:min-h-screen md:items-center">
      {/* Top meta line (compact on small screens) */}
      {!isSmallMobile ? (
        <div
          className="absolute top-2 left-0 right-0 grid grid-cols-3 text-[10px] sm:text-xs text-[var(--primary-text)] px-6"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
        >
          <div className="flex flex-col gap-1">
            <span>Young professional</span>
            <a
              href="#about"
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              About ↗
            </a>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>
              Currently working as a<br className="hidden sm:block" /> fullstack
              developer
            </span>
            <a
              href="#projects"
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              Projects ↗
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span>
              Based in Italy, Europe
              <br className="hidden sm:block" /> originally from Ukraine
              <br /> © 2025
            </span>
            <a
              href="#experience"
              className="hover:text-[var(--primary-text)] transition-colors"
            >
              Experience ↗
            </a>
          </div>
        </div>
      ) : null}

      {/* Name + role + subtitle */}
      <div className="w-full px-0 sm:px-6">
        <div
          className="name-block"
          style={{
            lineHeight: isSmallMobile
              ? "clamp(2.4rem, 9vw, 3.9rem)"
              : isTablet
                ? "clamp(2.3rem, 7vw, 4.9rem)"
                : "clamp(2rem, 6vw, 7rem)",
            padding: isSmallMobile
              ? "2.6rem 0 0.5rem"
              : isTablet
                ? "5.4rem 0 2rem"
                : "9.4rem 0",
            position: "relative",
            display: "inline-block",
            width: "auto",
            // center on small mobile when required, otherwise align left
            marginLeft: isSmallMobile ? (isTinyMobile ? 0 : "auto") : 0,
            marginRight: isSmallMobile ? (isTinyMobile ? 0 : "auto") : 0,
          }}
        >
          <span
            className="uppercase"
            style={{
              position: "absolute",
              left: isSmallMobile ? "0.2rem" : "0.8rem",
              top: isSmallMobile ? "-0.9rem" : isTablet ? "-1.2rem" : "5rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.2em",
              color: "#808080",
              fontSize: isSmallMobile ? "0.85rem" : "0.75rem",
            }}
          >
            HEY I’M
          </span>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#808080",
              fontSize: isSmallMobile
                ? "clamp(2.6rem, 10.5vw, 4.25rem)"
                : isTablet
                  ? "clamp(2.4rem, 7.5vw, 5.2rem)"
                  : "clamp(2.25rem, 9vw, 12rem)",

              letterSpacing: isTablet ? "2px" : "3px",

              margin: 0,
              textAlign: isSmallMobile
                ? isTinyMobile
                  ? "left"
                  : "center"
                : "left",
            }}
          >
            IRYNA CHEREPENKO
          </h1>
        </div>
        <h2
          className="uppercase font-extrabold tracking-widest"
          style={{
            color: "#ff6b4a",
            fontSize: isSmallMobile
              ? "clamp(1.5rem, 7vw, 3rem)"
              : isTablet
                ? "clamp(1.2rem, 4.5vw, 2.6rem)"
                : "clamp(1.25rem, 5vw, 4rem)",
            fontFamily: "var(--font-mono)",
            textAlign: isSmallMobile
              ? isTinyMobile
                ? "left"
                : "center"
              : "left",
          }}
        >
          SOFTWARE ENGINEER
        </h2>
        <p
          className="mt-3 md:mt-6 uppercase secondary-text"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: isSmallMobile
              ? "clamp(1.05rem, 3.6vw, 1.8rem)"
              : "clamp(0.9rem, 2.5vw, 2rem)",
            letterSpacing: "0.05em",
            textAlign: isSmallMobile
              ? isTinyMobile
                ? "left"
                : "center"
              : "left",
          }}
        >
          SPECIALIZED IN BUILDING EXCEPTIONAL DIGITAL PLATFORMS.
        </p>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="space-y-6 px-4 sm:px-6">
      <AboutHero />
      <WidgetTitle title={ABOUT.title} variant="centered" size="md" />
      <div className="flex justify-center">
        <div
          style={{ transform: "scale(0.86)", transformOrigin: "top center" }}
        >
          <RetroComputer />
        </div>
      </div>
      <AboutInfoBox
        style={{
          width: "min(360px, 92vw)",
          margin: "6px auto 0",
          display: "block",
        }}
      >
        <div
          className="p-4 sm:p-6"
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
              className="m-0 text-sm font-extrabold tracking-widest"
              style={{ textTransform: "uppercase" }}
            >
              Product‑minded Frontend with Backend superpowers
            </h3>
          </div>
          <ul className="mt-3 space-y-2">
            <li className="text-[13px]">
              <span style={{ color: "#ff6b4a" }}>▹</span> Full‑Stack Developer
              with <strong>5 years</strong> of commercial experience.
            </li>
            <li className="text-[13px]">
              <span style={{ color: "#ff6b4a" }}>▹</span> Front end concentrated
              on building UI with React & Next.js. Solid understanding of modern
              web architecture. Widgets and reusable UI systems.
            </li>
            <li className="text-[13px]">
              <span style={{ color: "#ff6b4a" }}>▹</span> Backend when needed:
              Node.js / NestJS.
            </li>
            <li className="text-[13px]">
              <span style={{ color: "#ff6b4a" }}>▹</span> Experience in{" "}
              <em>monorepos</em> and classic single‑repo projects.
            </li>
            <li className="text-[13px]">
              <span style={{ color: "#ff6b4a" }}>▹</span> Passionate about Agile
              product development; focused on shipping features that make real
              impact.
            </li>
          </ul>
        </div>
      </AboutInfoBox>
      <SkillsSection />
    </div>
  );

  const renderTablet = () => (
    <div className="space-y-8 px-4 sm:px-6">
      <AboutHero />
      <WidgetTitle title={ABOUT.title} variant="centered" size="lg" />
      <div className="flex flex-col items-center justify-center gap-2 mx-auto">
        <div
          style={{ transform: "scale(0.94)", transformOrigin: "top center" }}
        >
          <RetroComputer />
        </div>
        <AboutInfoBox
          style={{
            width: "min(520px, 90vw)",
            margin: "4px auto 0",
            display: "block",
          }}
        >
          <div
            className="p-6"
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
                className="m-0 text-base font-extrabold tracking-widest"
                style={{ textTransform: "uppercase" }}
              >
                Product‑minded Frontend with Backend superpowers
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">
                <span style={{ color: "#ff6b4a" }}>▹</span> Full‑Stack Developer
                with <strong>5 years</strong> of commercial experience.
              </li>
              <li className="text-sm">
                <span style={{ color: "#ff6b4a" }}>▹</span> Front end
                concentrated on building UI with React & Next.js. Solid
                understanding of modern web architecture. Widgets and reusable
                UI systems.
              </li>
              <li className="text-sm">
                <span style={{ color: "#ff6b4a" }}>▹</span> Backend when needed:
                Node.js / NestJS.
              </li>
              <li className="text-sm">
                <span style={{ color: "#ff6b4a" }}>▹</span> Experience in{" "}
                <em>monorepos</em> and classic single‑repo projects.
              </li>
              <li className="text-sm">
                <span style={{ color: "#ff6b4a" }}>▹</span> Passionate about
                Agile product development; focused on shipping features that
                make real impact.
              </li>
            </ul>
          </div>
        </AboutInfoBox>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-2">
        <SkillsSection
          style={{ width: "min(520px, 90vw)", margin: "0 auto" }}
        />
        <WorkExperienceSection
          style={{ width: "min(520px, 90vw)", margin: "0 auto" }}
        />
      </div>
    </div>
  );

  const renderDesktop = () => (
    <div className="space-y-8">
      <div className="px-4 sm:px-6">
        <AboutHero />
      </div>
      <div className="px-4 sm:px-6 pb-20">
        <WidgetTitle
          title={`${ABOUT.sectionNumber} · ${ABOUT.title}`}
          variant="centered"
          size="xl"
        />
      </div>
      <div className="px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-center gap-2 lg:gap-4 mx-auto">
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <div className="inline-block">
              <RetroComputer />
            </div>
            <SkillsSection
              style={{ width: "min(480px, 92vw)", margin: "0 auto" }}
            />
          </div>
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <AboutInfoBox
              style={{
                minHeight: 473,
                height: "100%",
                width: "min(720px, 60vw)",
              }}
            >
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
                    className="m-0 text-sm sm:text-base lg:text-lg font-extrabold tracking-widest"
                    style={{ textTransform: "uppercase" }}
                  >
                    Product‑minded Frontend with Backend superpowers
                  </h3>
                </div>

                <ul className="mt-4 space-y-2">
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Full‑Stack
                    Developer with <strong>5 years</strong> of commercial
                    experience.
                  </li>
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Front end
                    concentrated on building UI with React & Next.js. Solid
                    understanding of modern web architecture. Widgets and
                    reusable UI systems.
                  </li>
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Backend when
                    needed: Node.js / NestJS.
                  </li>
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Experience
                    working in both <em>monorepos</em> (separating
                    products/packages for shared code and clean ownership) and
                    classic single‑repo projects.
                  </li>
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Passionate about
                    Agile product development; focused on shipping features that
                    make real impact.
                  </li>
                  <li className="text-[13px] sm:text-sm lg:text-base">
                    <span style={{ color: "#ff6b4a" }}>▹</span> Strong soft
                    skills — comfortable in pizza‑teams, mentoring
                    interns/juniors, and driving work independently with high
                    standards.
                  </li>
                </ul>
              </div>
            </AboutInfoBox>
            <WorkExperienceSection
              style={{ width: "min(720px, 60vw)", margin: "0 auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id={id} className="pt-4 md:pt-10 pb-8 md:pb-10">
      {isSmallMobile
        ? renderMobile()
        : isTablet
          ? renderTablet()
          : renderDesktop()}
    </section>
  );
}
