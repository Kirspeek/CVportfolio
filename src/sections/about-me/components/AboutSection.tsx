"use client";

import React from "react";
import WidgetTitle from "./WidgetTitle";
import { useAboutResponsive } from "../hooks/useAboutResponsive";
import textsData from "../data/texts.json";
import AboutInfoBox from "./AboutInfoBox";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";
import AboutHero from "./AboutHero";
import AboutDescription from "./AboutDescription";
import type { AboutSectionProps, TextsData } from "../types";

export default function AboutSection({ id = "about" }: AboutSectionProps) {
  const { isSmallMobile, isTablet } = useAboutResponsive();

  const renderMobile = () => (
    <div className="space-y-6 px-4 sm:px-6">
      <AboutHero />
      <WidgetTitle
        title={(textsData as TextsData).about.title}
        variant="centered"
        size="md"
      />
      <AboutInfoBox
        style={{
          width: "min(360px, 92vw)",
          margin: "6px auto 0",
          display: "block",
        }}
      >
        <AboutDescription variant="mobile" />
      </AboutInfoBox>
      <SkillsSection />
      <WorkExperienceSection
        id="experience"
        style={{ width: "min(360px, 92vw)", margin: "12px auto 0" }}
      />
    </div>
  );

  const renderTablet = () => (
    <div className="space-y-8 px-4 sm:px-6">
      <AboutHero />
      <WidgetTitle
        title={(textsData as TextsData).about.title}
        variant="centered"
        size="lg"
      />
      <AboutInfoBox
        style={{
          width: "min(520px, 90vw)",
          margin: "4px auto 0",
          display: "block",
        }}
      >
        <AboutDescription variant="tablet" />
      </AboutInfoBox>
      <div className="flex flex-col md:flex-row items-start justify-center gap-2">
        <SkillsSection
          style={{ width: "min(520px, 90vw)", margin: "0 auto" }}
        />
        <WorkExperienceSection
          id="experience"
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
          title={`${(textsData as TextsData).about.sectionNumber} · ${(textsData as TextsData).about.title}`}
          variant="centered"
          size="xl"
        />
      </div>
      <div className="px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-center gap-2 lg:gap-4 mx-auto">
          <div className="flex flex-col items-center gap-2 lg:gap-4">
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
              <AboutDescription variant="desktop" />
            </AboutInfoBox>
            <WorkExperienceSection
              id="experience"
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

