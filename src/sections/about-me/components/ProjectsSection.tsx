import React, { useState } from "react";
import WidgetTitle from "./WidgetTitle";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import AboutInfoBox from "./AboutInfoBox";
import { ChevronDown, ChevronUp } from "lucide-react";
import projectsData from "../data/projects.json";
import textsData from "../data/texts.json";
import type {
  ProjectsSectionProps,
  ProjectsDataFile,
  TextsData,
} from "../types";

export default function ProjectsSection({
  id = "projects",
  collapsible = false,
}: ProjectsSectionProps) {
  const shopApp = (projectsData as ProjectsDataFile).projects.find(
    (p) => p.id === "shopapp"
  );
  const chartDashboard = (projectsData as ProjectsDataFile).projects.find(
    (p) => p.id === "chart-dashboard"
  );
  const projects = (textsData as TextsData).projects;
  const FullContent = () => (
    <>
      <div className="px-4 sm:px-6">
        <div style={{ width: "min(1216px, 100%)", margin: "0 auto" }}>
          <div
            className="p-0 sm:p-0"
            style={{
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            }}
          >
            {shopApp && (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block h-4 w-1.5 rounded-full"
                      style={{ background: "#ff6b4a" }}
                    />
                    <div
                      className="m-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontWeight: 800,
                        color: "var(--primary-text)",
                      }}
                    >
                      {shopApp.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <a
                      href={shopApp.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 border rounded"
                    >
                      {projects.buttons.liveDemo}
                    </a>
                    <a
                      href={shopApp.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 border rounded"
                    >
                      {projects.buttons.github}
                    </a>
                  </div>
                </div>
                <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                  <div className="lg:col-span-2 order-2 lg:order-1">
                    <p
                      className="m-0"
                      style={{
                        fontFamily:
                          'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "22px",
                        textTransform: "uppercase",
                        color: "var(--primary-text)",
                        textAlign: "left",
                      }}
                    >
                      {shopApp.description}
                    </p>
                    <div
                      className="mt-4"
                      style={{ borderTop: "6px solid #bdbdbd" }}
                    />

                    <div className="mt-3 grid grid-cols-1 gap-6">
                      <div>
                        <div
                          style={{
                            fontFamily:
                              'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: "18px",
                            textTransform: "none",
                            color: "var(--primary-text)",
                            textAlign: "left",
                          }}
                        >
                          {projects.sections.frontend}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #bdbdbd",
                            width: 80,
                            marginTop: 4,
                            marginBottom: 8,
                          }}
                        />
                        <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                          {(shopApp?.frontend ?? []).map((item, index) => (
                            <li
                              key={index}
                              className="text-[13px] sm:text-sm lg:text-base"
                              style={{
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.02em",
                                color: "var(--primary-text)",
                                lineHeight: 1.6,
                                listStyle: "none",
                              }}
                            >
                              <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily:
                              'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: "18px",
                            textTransform: "none",
                            color: "var(--primary-text)",
                            textAlign: "left",
                          }}
                        >
                          {projects.sections.backend}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #bdbdbd",
                            width: 80,
                            marginTop: 4,
                            marginBottom: 8,
                          }}
                        />
                        <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                          {(shopApp?.backend ?? []).map((item, index) => (
                            <li
                              key={index}
                              className="text-[13px] sm:text-sm lg:text-base"
                              style={{
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.02em",
                                color: "var(--primary-text)",
                                lineHeight: 1.6,
                                listStyle: "none",
                              }}
                            >
                              <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div
                        style={{
                          fontFamily:
                            'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                          fontWeight: 700,
                          fontSize: 14,
                          lineHeight: "18px",
                          textTransform: "none",
                          color: "var(--primary-text)",
                          textAlign: "left",
                        }}
                      >
                        {projects.sections.features}
                      </div>
                      <div
                        style={{
                          borderTop: "2px solid #bdbdbd",
                          width: 80,
                          marginTop: 4,
                          marginBottom: 8,
                        }}
                      />
                      <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                        {(shopApp?.features ?? []).map((item, index) => (
                          <li
                            key={index}
                            className="text-[13px] sm:text-sm lg:text-base"
                            style={{
                              fontFamily: "var(--font-mono)",
                              letterSpacing: "0.02em",
                              color: "var(--primary-text)",
                              lineHeight: 1.6,
                              listStyle: "none",
                            }}
                          >
                            <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-3 order-1 lg:order-2 flex justify-end lg:justify-center">
                    <ProjectShowcaseCard
                      baseUrl={shopApp.liveUrl}
                      variant="panel"
                      className="w-full"
                      style={{
                        display: "block",
                        border: "6px solid #bdbdbd",
                        borderRadius: 0,
                      }}
                      controls={false}
                      autoPlay={false}
                      scenes={[{ label: "Home", path: "/" }]}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {chartDashboard && (
        <div className="px-4 sm:px-6 mt-24">
          <div style={{ width: "min(1216px, 100%)", margin: "0 auto" }}>
            <div
              className="p-0 sm:p-0"
              style={{
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-4 w-1.5 rounded-full"
                    style={{ background: "#ff6b4a" }}
                  />
                  <div
                    className="m-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 800,
                      color: "var(--primary-text)",
                    }}
                  >
                    {chartDashboard.title}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <a
                    href={chartDashboard.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 border rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--primary-text)",
                      backgroundColor: "var(--background)",
                      borderColor: "#bdbdbd",
                      textDecoration: "none",
                    }}
                  >
                    {projects.buttons.liveDemo}
                  </a>
                  <a
                    href={chartDashboard.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 border rounded"
                  >
                    {projects.buttons.github}
                  </a>
                </div>
              </div>
              <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />

              <p
                className="mt-4 m-0 break-words"
                style={{
                  fontFamily:
                    'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "22px",
                  textTransform: "uppercase",
                  color: "var(--primary-text)",
                  textAlign: "left",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {chartDashboard.description}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="w-full" style={{ maxWidth: "100%", maxHeight: "800px" }}>
                  <ProjectShowcaseCard
                    baseUrl={chartDashboard.liveUrl}
                    variant="panel"
                    className="w-full"
                    style={{
                      display: "block",
                      border: "6px solid #bdbdbd",
                      borderRadius: 0,
                      maxHeight: "780px",
                      overflow: "hidden",
                    }}
                    controls={false}
                    autoPlay={false}
                    scenes={[{ label: "Home", path: "/" }]}
                    desktopWidth={chartDashboard.desktopWidth}
                    desktopHeight={chartDashboard.desktopHeight}
                    queryParams={{ embed: 1, sidebar: "closed" }}
                  />
                </div>
              </div>

              {chartDashboard.status && (
                <div className="mt-6">
                  <div
                    style={{
                      fontFamily:
                        'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "18px",
                      textTransform: "none",
                      color: "var(--primary-text)",
                      textAlign: "left",
                    }}
                  >
                    {projects.sections.projectStatus}
                  </div>
                  <div
                    style={{
                      borderTop: "2px solid #bdbdbd",
                      width: 80,
                      marginTop: 4,
                      marginBottom: 8,
                    }}
                  />
                  <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                    <li
                      className="text-[13px] sm:text-sm lg:text-base"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.02em",
                        color: "var(--primary-text)",
                        lineHeight: 1.6,
                        listStyle: "none",
                      }}
                    >
                      <span style={{ color: "#ff6b4a" }}>▹</span>{" "}
                      {chartDashboard.status}
                    </li>
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <div
                  className="mb-4"
                  style={{ borderTop: "6px solid #bdbdbd" }}
                />

                {chartDashboard.keyFeatures && (
                  <div className="mt-3">
                    <div
                      style={{
                        fontFamily:
                          'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: "18px",
                        textTransform: "none",
                        color: "var(--primary-text)",
                        textAlign: "left",
                      }}
                    >
                      {projects.sections.keyFeatures}
                    </div>
                    <div
                      style={{
                        borderTop: "2px solid #bdbdbd",
                        width: 80,
                        marginTop: 4,
                        marginBottom: 8,
                      }}
                    />
                    <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                      {chartDashboard.keyFeatures.map((item, index) => (
                        <li
                          key={index}
                          className="text-[13px] sm:text-sm lg:text-base"
                          style={{
                            fontFamily: "var(--font-mono)",
                            letterSpacing: "0.02em",
                            color: "var(--primary-text)",
                            lineHeight: 1.6,
                            listStyle: "none",
                          }}
                        >
                          <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {chartDashboard.techStack && (
                  <div className="mt-3">
                    <div
                      style={{
                        fontFamily:
                          'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: "18px",
                        textTransform: "none",
                        color: "var(--primary-text)",
                        textAlign: "left",
                      }}
                    >
                      {projects.sections.techStack}
                    </div>
                    <div
                      style={{
                        borderTop: "2px solid #bdbdbd",
                        width: 80,
                        marginTop: 4,
                        marginBottom: 8,
                      }}
                    />
                    <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                      {chartDashboard.techStack.map((item, index) => (
                        <li
                          key={index}
                          className="text-[13px] sm:text-sm lg:text-base"
                          style={{
                            fontFamily: "var(--font-mono)",
                            letterSpacing: "0.02em",
                            color: "var(--primary-text)",
                            lineHeight: 1.6,
                            listStyle: "none",
                          }}
                        >
                          <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (collapsible) {
    return (
      <section id={id}>
        <div className="px-4 sm:px-6 pb-6">
          <WidgetTitle title={projects.title} variant="centered" size="xl" />
        </div>
        
        <div className="px-4 sm:px-6">
          {/* ShopApp Collapsible */}
          {shopApp && (
          <CollapsibleProject 
            title={shopApp.title} 
            defaultOpen={false}
          >
            <div className="pt-4">
              <div
                className="p-0 sm:p-0"
                style={{
                  fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                }}
              >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block h-4 w-1.5 rounded-full"
                        style={{ background: "#ff6b4a" }}
                      />
                      <div
                        className="m-0"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          fontWeight: 800,
                          color: "var(--primary-text)",
                        }}
                      >
                        {shopApp.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <a
                        href={shopApp.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border rounded"
                      >
                        {projects.buttons.liveDemo}
                      </a>
                      <a
                        href={shopApp.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border rounded"
                      >
                        {projects.buttons.github}
                      </a>
                    </div>
                  </div>
                  <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    <div className="lg:col-span-2 order-2 lg:order-1">
                      <p
                        className="m-0"
                        style={{
                          fontFamily:
                            'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: "22px",
                          textTransform: "uppercase",
                          color: "var(--primary-text)",
                          textAlign: "left",
                        }}
                      >
                        {shopApp.description}
                      </p>
                      <div
                        className="mt-4"
                        style={{ borderTop: "6px solid #bdbdbd" }}
                      />

                      <div className="mt-3 grid grid-cols-1 gap-6">
                        <div>
                          <div
                            style={{
                              fontFamily:
                                'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                              fontWeight: 700,
                              fontSize: 14,
                              lineHeight: "18px",
                              textTransform: "none",
                              color: "var(--primary-text)",
                              textAlign: "left",
                            }}
                          >
                            {projects.sections.frontend}
                          </div>
                          <div
                            style={{
                              borderTop: "2px solid #bdbdbd",
                              width: 80,
                              marginTop: 4,
                              marginBottom: 8,
                            }}
                          />
                          <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                            {(shopApp?.frontend ?? []).map((item, index) => (
                              <li
                                key={index}
                                className="text-[13px] sm:text-sm lg:text-base"
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  letterSpacing: "0.02em",
                                  color: "var(--primary-text)",
                                  lineHeight: 1.6,
                                  listStyle: "none",
                                }}
                              >
                                <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily:
                                'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                              fontWeight: 700,
                              fontSize: 14,
                              lineHeight: "18px",
                              textTransform: "none",
                              color: "var(--primary-text)",
                              textAlign: "left",
                            }}
                          >
                            {projects.sections.backend}
                          </div>
                          <div
                            style={{
                              borderTop: "2px solid #bdbdbd",
                              width: 80,
                              marginTop: 4,
                              marginBottom: 8,
                            }}
                          />
                          <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                            {(shopApp?.backend ?? []).map((item, index) => (
                              <li
                                key={index}
                                className="text-[13px] sm:text-sm lg:text-base"
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  letterSpacing: "0.02em",
                                  color: "var(--primary-text)",
                                  lineHeight: 1.6,
                                  listStyle: "none",
                                }}
                              >
                                <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div
                          style={{
                            fontFamily:
                              'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: "18px",
                            textTransform: "none",
                            color: "var(--primary-text)",
                            textAlign: "left",
                          }}
                        >
                          {projects.sections.features}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #bdbdbd",
                            width: 80,
                            marginTop: 4,
                            marginBottom: 8,
                          }}
                        />
                        <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                          {(shopApp?.features ?? []).map((item, index) => (
                            <li
                              key={index}
                              className="text-[13px] sm:text-sm lg:text-base"
                              style={{
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.02em",
                                color: "var(--primary-text)",
                                lineHeight: 1.6,
                                listStyle: "none",
                              }}
                            >
                              <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </CollapsibleProject>
        )}

        {/* ChartDashboard Collapsible */}
        {chartDashboard && (
          <CollapsibleProject 
            title="Chart Dashboard" 
            defaultOpen={false}
            style={{ marginTop: "24px" }}
          >
            <div className="pt-4">
              <div style={{ width: "min(1216px, 100%)", margin: "0 auto" }}>
                <div
                  className="p-0 sm:p-0"
                  style={{
                    fontFamily:
                      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block h-4 w-1.5 rounded-full"
                        style={{ background: "#ff6b4a" }}
                      />
                      <div
                        className="m-0"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          fontWeight: 800,
                          color: "var(--primary-text)",
                        }}
                      >
                        {chartDashboard.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <a
                        href={chartDashboard.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border rounded"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "var(--primary-text)",
                          backgroundColor: "var(--background)",
                          borderColor: "#bdbdbd",
                          textDecoration: "none",
                        }}
                      >
                        {projects.buttons.liveDemo}
                      </a>
                      <a
                        href={chartDashboard.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border rounded"
                      >
                        {projects.buttons.github}
                      </a>
                    </div>
                  </div>
                  <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />

                  <p
                    className="mt-4 m-0 break-words"
                    style={{
                      fontFamily:
                        'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "22px",
                      textTransform: "uppercase",
                      color: "var(--primary-text)",
                      textAlign: "left",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {chartDashboard.description}
                  </p>



                  {chartDashboard.status && (
                    <div className="mt-6">
                      <div
                        style={{
                          fontFamily:
                            'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                          fontWeight: 700,
                          fontSize: 14,
                          lineHeight: "18px",
                          textTransform: "none",
                          color: "var(--primary-text)",
                          textAlign: "left",
                        }}
                      >
                        {projects.sections.projectStatus}
                      </div>
                      <div
                        style={{
                          borderTop: "2px solid #bdbdbd",
                          width: 80,
                          marginTop: 4,
                          marginBottom: 8,
                        }}
                      />
                      <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                        <li
                          className="text-[13px] sm:text-sm lg:text-base"
                          style={{
                            fontFamily: "var(--font-mono)",
                            letterSpacing: "0.02em",
                            color: "var(--primary-text)",
                            lineHeight: 1.6,
                            listStyle: "none",
                          }}
                        >
                          <span style={{ color: "#ff6b4a" }}>▹</span>{" "}
                          {chartDashboard.status}
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <div
                      className="mb-4"
                      style={{ borderTop: "6px solid #bdbdbd" }}
                    />

                    {chartDashboard.keyFeatures && (
                      <div className="mt-3">
                        <div
                          style={{
                            fontFamily:
                              'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: "18px",
                            textTransform: "none",
                            color: "var(--primary-text)",
                            textAlign: "left",
                          }}
                        >
                          {projects.sections.keyFeatures}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #bdbdbd",
                            width: 80,
                            marginTop: 4,
                            marginBottom: 8,
                          }}
                        />
                        <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                          {chartDashboard.keyFeatures.map((item, index) => (
                            <li
                              key={index}
                              className="text-[13px] sm:text-sm lg:text-base"
                              style={{
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.02em",
                                color: "var(--primary-text)",
                                lineHeight: 1.6,
                                listStyle: "none",
                              }}
                            >
                              <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {chartDashboard.techStack && (
                      <div className="mt-3">
                        <div
                          style={{
                            fontFamily:
                              'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: "18px",
                            textTransform: "none",
                            color: "var(--primary-text)",
                            textAlign: "left",
                          }}
                        >
                          {projects.sections.techStack}
                        </div>
                        <div
                          style={{
                            borderTop: "2px solid #bdbdbd",
                            width: 80,
                            marginTop: 4,
                            marginBottom: 8,
                          }}
                        />
                        <ul className="mt-2 space-y-2" style={{ paddingLeft: 0 }}>
                          {chartDashboard.techStack.map((item, index) => (
                            <li
                              key={index}
                              className="text-[13px] sm:text-sm lg:text-base"
                              style={{
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.02em",
                                color: "var(--primary-text)",
                                lineHeight: 1.6,
                                listStyle: "none",
                              }}
                            >
                              <span style={{ color: "#ff6b4a" }}>▹</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleProject>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="pt-4 md:pt-10 pb-8 md:pb-10">
      <div className="px-4 sm:px-6 pb-10">
        <WidgetTitle title={projects.title} variant="centered" size="xl" />
      </div>
      <FullContent />
    </section>
  );
}

function CollapsibleProject({ 
  title, 
  children, 
  defaultOpen = false,
  style 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <AboutInfoBox
      style={{ width: "min(980px,96vw)", margin: "0 auto", ...style }}
    >
      <div className="p-4 sm:p-6 md:p-8">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between"
        >
          <h3
            className="m-0"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            {title}
          </h3>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {isOpen && (
          <>
             <div
              className="mt-2"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            />
            {children}
          </>
        )}
      </div>
    </AboutInfoBox>
  );
}

