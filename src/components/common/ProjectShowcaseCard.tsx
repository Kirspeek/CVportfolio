"use client";

import React from "react";

export type ShowcaseScene = {
  label: string;
  path: string;
};

type ProjectShowcaseCardProps = {
  baseUrl: string;
  scenes?: ShowcaseScene[];
  autoPlay?: boolean;
  cycleMs?: number;
  variant?: "card" | "panel"; // card = retro-card wrapper, panel = containerless for embedding
  className?: string;
  style?: React.CSSProperties;
  controls?: boolean;
  desktopWidth?: number;
  desktopHeight?: number;
  queryParams?: Record<string, string | number | boolean>;
};

export default function ProjectShowcaseCard({
  baseUrl,
  scenes = [
    { label: "Home", path: "/" },
    // Navigate to the Home page's Featured Products section via hash
    { label: "Products", path: "/#featured" },
    { label: "Cart", path: "/cart" },
  ],
  autoPlay = true,
  cycleMs = 5000,
  variant = "card",
  className,
  style,
  controls = true,
  desktopWidth,
  desktopHeight,
  queryParams,
}: ProjectShowcaseCardProps) {
  const [index, setIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [device, setDevice] = React.useState<"desktop" | "mobile">("desktop");
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  React.useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % scenes.length);
    }, cycleMs);
    return () => clearInterval(id);
  }, [isPlaying, cycleMs, scenes.length]);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + scenes.length) % scenes.length);
    setIsPlaying(false);
  };

  const current = scenes[index];
  // Build a robust URL that supports optional query params and hash fragments
  const url = new URL(baseUrl);
  if (current.path) {
    const hashIndex = current.path.indexOf("#");
    const pathPart =
      hashIndex >= 0 ? current.path.slice(0, hashIndex) : current.path;
    const hashPart = hashIndex >= 0 ? current.path.slice(hashIndex + 1) : "";
    if (pathPart) {
      url.pathname = pathPart;
    }
    if (hashPart) {
      url.hash = hashPart;
    }
  }
  if (queryParams) {
    Object.entries(queryParams).forEach(([k, v]) =>
      url.searchParams.set(k, String(v))
    );
  }
  const src = url.toString();
  const origin = React.useMemo(() => {
    try {
      const u = new URL(baseUrl);
      return u.origin;
    } catch {
      return "*";
    }
  }, [baseUrl]);

  // Frame sizing
  const frameWidth = device === "desktop" ? (desktopWidth ?? 1024) : 390;
  const frameHeight = device === "desktop" ? (desktopHeight ?? 640) : 720;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (variant === "card") {
      return (
        <div
          className={`retro-card ${className ?? ""}`.trim()}
          style={{ width: "min(980px,96vw)", margin: "8px auto 0", ...style }}
        >
          {children}
        </div>
      );
    }
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="p-3 sm:p-4" style={{ fontFamily: "var(--font-mono)" }}>
        {controls && (
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-4 w-1.5 rounded-full"
                style={{ background: "#ff6b4a" }}
              />
              <div className="uppercase font-extrabold tracking-widest">
                Live Demo — {current.label}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="px-2 py-1 border rounded"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={() => go(-1)}
                className="px-2 py-1 border rounded"
              >
                Prev
              </button>
              <button
                onClick={() => go(1)}
                className="px-2 py-1 border rounded"
              >
                Next
              </button>
              <div className="ml-2 flex items-center gap-1">
                <button
                  onClick={() => setDevice("desktop")}
                  className={`px-2 py-1 border rounded ${
                    device === "desktop" ? "bg-gray-100" : ""
                  }`}
                  title="Desktop"
                >
                  Desktop
                </button>
                <button
                  onClick={() => setDevice("mobile")}
                  className={`px-2 py-1 border rounded ${
                    device === "mobile" ? "bg-gray-100" : ""
                  }`}
                  title="Mobile"
                >
                  Mobile
                </button>
              </div>
              <button
                onClick={() => runScriptedTour()}
                className="ml-2 px-2 py-1 border rounded"
                title="Run scripted tour"
              >
                Run tour
              </button>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-2 py-1 border rounded"
                title="Open in new tab"
              >
                Open ↗
              </a>
            </div>
          </div>
        )}

        <div className={`${controls ? "mt-3" : "mt-0"} flex justify-center`}>
          <div
            className="relative overflow-hidden bg-black/5"
            style={{
              width: frameWidth,
              height: frameHeight,
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 8,
              boxShadow:
                "0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08)",
              margin: controls ? "0" : "16px",
            }}
          >
            <iframe
              key={src}
              src={src}
              title="Project showcase"
              ref={iframeRef}
              style={{ width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              loading="lazy"
            />
            <div
              className="absolute right-2 bottom-2 text-[10px] opacity-70"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {index + 1}/{scenes.length}
            </div>
          </div>
        </div>

        {controls && (
          <div className="mt-2 flex flex-wrap gap-2 justify-center text-xs">
            {scenes.map((s, i) => (
              <button
                key={s.path}
                onClick={() => {
                  setIndex(i);
                  setIsPlaying(false);
                }}
                className={`px-2 py-1 border rounded ${i === index ? "bg-gray-100" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );

  function post(action: string, payload?: unknown) {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage({ type: "showcase", action, payload }, origin);
  }

  function runScriptedTour() {
    setIsPlaying(false);
    // Navigate scenes locally so URL updates even if the app ignores messages
    setIndex(0);
    setTimeout(() => setIndex(1), 2500);
    setTimeout(() => setIndex(2), 5000);

    // If the embedded app supports postMessage, also request in-app interactions
    post("navigate", { path: "/" });
    setTimeout(
      () => post("scrollTo", { selector: "main", y: 600, behavior: "smooth" }),
      800
    );
    setTimeout(() => post("navigate", { path: "/#featured" }), 2500);
    setTimeout(
      () => post("click", { selector: "button[data-testid='add-to-cart']" }),
      3500
    );
    setTimeout(() => {
      post("openCart");
      post("click", { selector: "[data-testid='cart-button']" });
      post("click", { selector: "[aria-label='Cart']" });
      post("click", { selector: ".cart, .bag, .cart-button" });
      post("navigate", { path: "/cart" });
    }, 5000);
  }
}
