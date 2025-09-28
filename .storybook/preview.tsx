import type { Preview } from "@storybook/nextjs";
import React from "react";
import "../src/styles/globals.css";
import "../src/styles/mobile.css";
import "../src/styles/mobile-grid.css";
import "../src/styles/weather.css";
import { TooltipProvider } from "../src/context/TooltipContext";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    backgrounds: { disable: true },
    themes: {
      default: "dark",
      list: [
        { name: "light", class: "light", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#000000" },
      ],
    },
    viewport: {
      viewports: {
        mobile1: {
          name: "Small mobile",
          styles: { width: "360px", height: "640px" },
        },
        mobile2: {
          name: "Large mobile",
          styles: { width: "414px", height: "896px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
    (Story, context) => {
      const selected = (context.globals as any).theme as string | undefined;
      const mode =
        selected === "light" ? "light" : selected === "dark" ? "dark" : "dark";
      try {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("theme", mode);
          // Also emit storage event so our useTheme store in components reacts immediately
          window.dispatchEvent(
            new StorageEvent("storage", { key: "theme", newValue: mode } as any)
          );
        }
      } catch {}
      return <Story />;
    },
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default preview;
