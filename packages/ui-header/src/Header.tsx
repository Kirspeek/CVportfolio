import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Title from "./parts/Title";
import NavButtons from "./parts/NavButtons";
import ContactIcons from "./parts/ContactIcons";

import type { HeaderProps, HeaderLink, SectionKey } from "./types";

export default function Header({
  title = "Portfolio",
  contactEmail,
  contactLinks = [],
  pill = false,
  className,
  defaultSection = "about",
  sections,
  onSectionChange,
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeSection, setActiveSection] =
    useState<SectionKey>(defaultSection);

  const iconSize = isMobile ? 22 : isTablet ? 26 : 28;
  const orangeColor = "var(--primary-text)";
  const iconStroke = isMobile ? 2.2 : isTablet ? 2.35 : 2.5;

  const cvHref = "/cv.pdf";

  const CvButton: React.FC<{ size?: "sm" | "md" | "lg" }> = ({
    size = "md",
  }) => {
    const padding = size === "sm" ? "5px 10px" : size === "lg" ? "6px 12px" : "5px 10px";
    const fontSize = size === "sm" ? "0.875rem" : size === "lg" ? "0.875rem" : "0.875rem";
    const iconPx = size === "sm" ? 18 : size === "lg" ? 18 : 18;
    return (
      <a
        href={cvHref}
        download
        className="widget-button rounded-full inline-flex items-center gap-1"
        style={{
          fontWeight: 500,
          letterSpacing: "0.01em",
          border: `0.5px solid ${orangeColor}`,
          color: orangeColor,
          background: "transparent",
          fontFamily: "var(--font-mono)",
          textTransform: "uppercase",
          padding,
          fontSize,
        }}
        title="Download CV"
      >
        <span>My CV</span>
        <Download size={iconPx} color={orangeColor} strokeWidth={iconStroke} />
      </a>
    );
  };

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 425);
      setIsTablet(width > 425 && width <= 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);


  const containerStyle: React.CSSProperties | undefined = pill
    ? {
      borderRadius: 9999,
      border: "2px solid #222",
      background: "#ded4c6",
      boxShadow: "0 2px 0 #222, inset 0 0 0 2px rgba(255,255,255,0.35)",
      padding: 6,
    }
    : undefined;

  const defaultSections: Array<{ key: SectionKey; label: string }> = [
    { key: "about", label: "About me" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];
  const sectionList = sections !== undefined ? sections : defaultSections;
  const sectionLabelMap = new Map(sectionList.map((s) => [s.key, s.label]));
  const computedTitle = sectionLabelMap.get(activeSection) || title;

  const setSection = (next: SectionKey) => {
    setActiveSection(next);
    onSectionChange?.(next);
  };

  const aboutLink = contactLinks?.find((l) =>
    /about|website|portfolio/i.test(l.label)
  );

  return (
    <header
      className={`relative z-30 ${className ?? ""}`}
      style={containerStyle}
    >
      <div className="px-4 sm:px-6 lg:px-6">
        {isMobile ? (
          <>
            {/* Top Bar: Title + Contact Icons */}
            <div className="flex flex-col gap-2 py-3">
              
              {/* Section Title (using Title component) */}
              <div className="flex items-center justify-center">
                <Title text={sectionLabelMap.get(activeSection) || ""} fontSize="1.2rem" />
              </div>

            </div>
          </>
        ) : isTablet ? (
          <div className="flex flex-col gap-3 py-4">
            <div className="flex items-center justify-center">
              <Title text={computedTitle} fontSize="1.55rem" />
            </div>
            <NavButtons
              sections={sectionList.map(s => s.key)}
              activeSection={activeSection}
              onSelect={setSection}
              labelMap={sectionLabelMap}
              getSectionHref={undefined}
              color={orangeColor}
              borderWidth={0.5}
              textSizeClass="text-xs"
              paddingClass="px-3 py-1.5"
              className="flex flex-wrap items-center justify-center gap-2"
            />
            {(contactEmail || (contactLinks && contactLinks.length > 0)) && (
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  {activeSection === "about" && <CvButton size="md" />}
                  <ContactIcons
                    contactEmail={contactEmail}
                    contactLinks={contactLinks}
                    aboutLink={aboutLink as HeaderLink | undefined}
                    showAboutLink={activeSection === "about" && !!aboutLink}
                    color={orangeColor}
                    size={iconSize}
                    stroke={iconStroke}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="relative flex items-center h-16">
            <div className="flex items-center">
              <NavButtons
                sections={sectionList.map(s => s.key)}
                activeSection={activeSection}
                onSelect={setSection}
                labelMap={sectionLabelMap}
                getSectionHref={undefined}
                color={orangeColor}
                borderWidth={0.5}
                textSizeClass="text-xs"
                paddingClass="px-3 py-1.5"
                className="flex items-center gap-2"
              />
            </div>

            <div className="ml-auto flex items-center space-x-4">
              {activeSection === "about" && <CvButton size="lg" />}
              {contactEmail || (contactLinks && contactLinks.length > 0) ? (
                <ContactIcons
                  contactEmail={contactEmail}
                  contactLinks={contactLinks}
                  aboutLink={aboutLink as HeaderLink | undefined}
                  showAboutLink={activeSection === "about" && !!aboutLink}
                  color={orangeColor}
                  size={iconSize}
                  stroke={iconStroke}
                />
              ) : null}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
