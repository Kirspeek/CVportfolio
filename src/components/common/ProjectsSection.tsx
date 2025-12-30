"use client";

import React from "react";
import WidgetTitle from "./WidgetTitle";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

type ProjectsSectionProps = { id?: string };

export default function ProjectsSection({
  id = "projects",
}: ProjectsSectionProps) {
  return (
    <section id={id} className="pt-4 md:pt-10 pb-8 md:pb-10">
      <div className="px-4 sm:px-6 pb-10">
        <WidgetTitle title="02 · My Projects" variant="centered" size="xl" />
      </div>
      <div className="px-4 sm:px-6">
        {/* Clean layout without box; keep grey divider under title */}
        <div style={{ width: "min(1216px,96vw)", margin: "0 auto" }}>
          <div
            className="p-0 sm:p-0"
            style={{
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            }}
          >
            {/* Header with quick links */}
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
                  ShopApp
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <a
                  href="https://shopapp-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 border rounded"
                >
                  Live demo ↗
                </a>
                <a
                  href="https://github.com/Kirspeek/shopapp"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 border rounded"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />
            {/* Content + Live demo side by side */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-2 order-2 lg:order-1">
                {/* Intro */}
                <p
                  className="m-0"
                  style={{
                    fontFamily:
                      'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "22px",
                    textTransform: "uppercase",
                    color: "#bdbdbd",
                    textAlign: "left",
                  }}
                >
                  A feature‑rich online store where users browse, search and
                  purchase products. Built as a
                  <strong style={{ letterSpacing: "0.08em" }}> monorepo</strong>{" "}
                  with separate
                  <strong style={{ letterSpacing: "0.08em" }}>
                    {" "}
                    client
                  </strong>{" "}
                  (React + MUI) and
                  <strong style={{ letterSpacing: "0.08em" }}>
                    {" "}
                    server
                  </strong>{" "}
                  (Strapi) packages.
                </p>
                <div
                  className="mt-4"
                  style={{ borderTop: "6px solid #bdbdbd" }}
                />

                {/* Two-column spec */}
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
                      color: "#bdbdbd",
                      textAlign: "left",
                    }}
                  >
                    frontend
                    </div>
                    <div
                      style={{
                        borderTop: "2px solid #bdbdbd",
                        width: 80,
                        marginTop: 4,
                        marginBottom: 8,
                      }}
                    />
                    <ul
                      className="mt-2"
                      style={{
                        paddingLeft: 18,
                        fontFamily:
                          'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "18px",
                        color: "rgba(255, 255, 255, 1)",
                        textAlign: "left",
                      }}
                    >
                      <li style={{ listStyle: "none" }}>
                        React + MUI with Redux Toolkit
                      </li>
                      <li style={{ listStyle: "none" }}>
                        React Router with responsive UI
                      </li>
                      <li style={{ listStyle: "none" }}>
                        Product catalog, details, cart, Stripe payments
                      </li>
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
                        color: "#bdbdbd",
                        textAlign: "left",
                      }}
                    >
                      backend
                    </div>
                    <div
                      style={{
                        borderTop: "2px solid #bdbdbd",
                        width: 80,
                        marginTop: 4,
                        marginBottom: 8,
                      }}
                    />
                    <ul
                      className="mt-2"
                      style={{
                        paddingLeft: 18,
                        fontFamily:
                          'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "18px",
                        color: "rgba(255, 255, 255, 1)",
                        textAlign: "left",
                      }}
                    >
                      <li style={{ listStyle: "none" }}>Strapi/Node.js</li>
                      <li style={{ listStyle: "none" }}>
                        REST API with authentication and permissions
                      </li>
                      <li style={{ listStyle: "none" }}>
                        SQLite by default; MySQL/Postgres ready
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-3">
                  <div
                    style={{
                      fontFamily:
                        'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "18px",
                      textTransform: "none",
                      color: "#bdbdbd",
                      textAlign: "left",
                    }}
                  >
                    features
                  </div>
                  <div
                    style={{
                      borderTop: "2px solid #bdbdbd",
                      width: 80,
                      marginTop: 4,
                      marginBottom: 8,
                    }}
                  />
                  <ul
                    className="mt-2"
                    style={{
                      paddingLeft: 18,
                      fontFamily:
                        'pgzb, var(--font-fira-sans), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "18px",
                      color: "rgba(255, 255, 255, 1)",
                      textAlign: "left",
                    }}
                  >
                    <li style={{ listStyle: "none" }}>
                      Browse by category; rich product pages
                    </li>
                    <li style={{ listStyle: "none" }}>
                      Responsive cart menu and wishlist
                    </li>
                    <li style={{ listStyle: "none" }}>
                      Secure checkout and order confirmation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2 flex justify-end lg:justify-center">
                <ProjectShowcaseCard
                  baseUrl="https://shopapp-eight.vercel.app"
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
          </div>
        </div>
      </div>

      {/* Project 2: Chart Dashboard (live left, text right) */}
      <div className="px-4 sm:px-6 mt-24">
        <div style={{ width: "min(1216px,96vw)", margin: "0 auto" }}>
          {/* Text on top */}
          <div
            className="mb-6"
            style={{
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            }}
          >
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
                Chart Dashboard — Advanced Analytics
              </div>
            </div>
            <div className="mt-2" style={{ borderTop: "6px solid #bdbdbd" }} />
            <p
              className="mt-3"
              style={{
                lineHeight: 1.6,
                fontSize: 15.5,
                color: "var(--primary-text)",
              }}
            >
              A modern, feature‑rich analytics dashboard built with Next.js 15,
              TypeScript, and cutting‑edge visualization libraries. This
              platform combines real‑time data visualization, interactive
              widgets, and a seamless UX across devices.
            </p>
            <div
              className="text-xs uppercase"
              style={{
                opacity: 0.85,
                letterSpacing: "0.06em",
                fontWeight: 700,
              }}
            >
              Project Status
            </div>
            <div
              style={{
                borderTop: "2px solid #bdbdbd",
                width: 80,
                marginTop: 4,
                marginBottom: 8,
              }}
            />
            <p
              className="m-0"
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--primary-text)",
              }}
            >
              In active development; new components and features are added
              continuously while existing functionality is refined and
              optimized.
            </p>

            <div className="mt-4">
              <div
                className="text-xs uppercase"
                style={{
                  opacity: 0.85,
                  letterSpacing: "0.06em",
                  fontWeight: 700,
                }}
              >
                Key Features
              </div>
              <div
                style={{
                  borderTop: "2px solid #bdbdbd",
                  width: 80,
                  marginTop: 4,
                  marginBottom: 8,
                }}
              />
              <ul
                style={{
                  paddingLeft: 18,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--primary-text)",
                }}
              >
                <li>
                  Advanced charts: Line, Bar, Radar, Chord, Sankey, Bubble
                </li>
                <li>Real‑time performance metrics, timelines, and heatmaps</li>
                <li>Spotify integration: search, play, playlists, favorites</li>
                <li>
                  Financial widgets: wallet, spending analytics, cards, timeline
                </li>
                <li>
                  Weather & maps: multi‑city forecasts, Mapbox, animations
                </li>
                <li>
                  Time & productivity: world clock, timer, calendar, timeline
                  rings
                </li>
                <li>
                  Responsive design with PWA, dark/light themes, and animations
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div
                className="text-xs uppercase"
                style={{
                  opacity: 0.85,
                  letterSpacing: "0.06em",
                  fontWeight: 700,
                }}
              >
                Tech Stack
              </div>
              <div
                style={{
                  borderTop: "2px solid #bdbdbd",
                  width: 80,
                  marginTop: 4,
                  marginBottom: 8,
                }}
              />
              <ul
                style={{
                  paddingLeft: 18,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--primary-text)",
                }}
              >
                <li>Next.js 15 (App Router), TypeScript, Tailwind CSS</li>
                <li>Recharts & D3.js, Mapbox GL JS, Three.js</li>
                <li>WebSockets for live data; Framer Motion for animations</li>
                <li>
                  Spotify API, OpenWeatherMap, payment validation, geolocation
                </li>
              </ul>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              <a
                href="https://my-chart-dashboard.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 border rounded"
              >
                Live demo ↗
              </a>
              <a
                href="https://github.com/Kirspeek/my-chart-dashboard"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 border rounded"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          {/* Live desktop (1440x900) cropped to hide internal header/left menu and scaled */}
          <div className="w-full flex justify-center">
            {/* Outer crop box: fine‑tuned to hide left sidebar and top header; also trims bottom */}
            <div
              style={{
                // tune these four numbers if layout changes
                overflow: "hidden",
                position: "relative",
                borderRadius: 8,
                width: (1440 - 210 - 0) * 0.7,
                height: "420px",
              }}
            >
              {/* Inner canvas applies translate then scale so the cropped areas are hidden */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "translate(-210px, -120px) scale(0.7)",
                  transformOrigin: "top left",
                }}
              >
                <ProjectShowcaseCard
                  baseUrl="https://my-chart-dashboard.vercel.app"
                  variant="panel"
                  className="w-full"
                  style={{ display: "block" }}
                  controls={false}
                  autoPlay={false}
                  scenes={[{ label: "Home", path: "/" }]}
                  desktopWidth={1440}
                  desktopHeight={900}
                  queryParams={{ embed: 1, sidebar: "closed" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
