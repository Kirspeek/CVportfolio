"use client";

import React from "react";
import { Header as UIHeader } from "../../../../packages/ui-header/src";
import type { SectionKey } from "../../../../packages/ui-header/src/types";
import WidgetBase from "@/components/common/WidgetBase";

export default function HeaderWidget({
  defaultSection = "about",
  onSectionChange,
}: {
  defaultSection?: SectionKey;
  onSectionChange?: (s: SectionKey) => void;
  sections?: Array<{ key: SectionKey; label: string }>;
}) {
  return (
    <div className="widget-container">
      <WidgetBase
        className="rounded-2xl"
        style={{
          padding: 16,
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none'
        }}
      >
        <UIHeader
          defaultSection={defaultSection}
          sections={[]}
          onSectionChange={onSectionChange}
          showThemeToggle
          contactEmail="cherepenko.iryna@gmail.com"
          contactLinks={[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/irynacherepenko/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              label: "GitHub",
              href: "https://github.com/Kirspeek",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              label: "Telegram",
              href: "https://t.me/kirstnd",
              target: "_blank",
              rel: "noopener noreferrer",
            },
          ]}
        />
      </WidgetBase>
    </div>
  );
}
