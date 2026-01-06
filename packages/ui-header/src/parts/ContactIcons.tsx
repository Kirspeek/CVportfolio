import React from "react";
import type { HeaderLink } from "../types";
import { Github, Linkedin, Mail, Send, Link as LinkIcon } from "lucide-react";

export type ContactIconsProps = {
  contactEmail?: string;
  contactLinks?: HeaderLink[];
  aboutLink?: HeaderLink;
  showAboutLink: boolean;
  color: string;
  size: number;
  stroke: number;
  gapClass?: string;
};

export default function ContactIcons({
  contactEmail,
  contactLinks = [],
  aboutLink,
  showAboutLink,
  color,
  size,
  stroke,
  gapClass = "gap-4",
}: ContactIconsProps) {
  return (
    <div className={`flex items-center ${gapClass}`}>
      {contactEmail && (
        <a
          href={`mailto:${contactEmail}`}
          title={contactEmail}
          aria-label={`Email ${contactEmail}`}
          className="widget-button rounded-full inline-flex items-center justify-center"
          style={{
            border: `0.5px solid ${color}`,
            color,
            background: "transparent",
            padding: "5px 10px",
            fontSize: "0.875rem",
            minWidth: "32px",
            minHeight: "32px",
          }}
        >
          <Mail size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
        </a>
      )}
      {contactLinks
        ?.filter((l) => /github|linkedin|instagram|telegram/i.test(l.label))
        .map((l) => {
          const isGithub = /github/i.test(l.label);
          const isInstagram = /instagram/i.test(l.label);
          const isLinkedIn = /linkedin/i.test(l.label);
          const isTelegram = /telegram/i.test(l.label);
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.target}
              rel={l.rel}
              title={l.label}
              className="widget-button rounded-full inline-flex items-center justify-center"
              style={{
                border: `0.5px solid ${color}`,
                color,
                background: "transparent",
                padding: "5px 10px",
                fontSize: "0.875rem",
                minWidth: "32px",
                minHeight: "32px",
              }}
            >
              {isGithub ? (
                <Github size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
              ) : isLinkedIn ? (
                <Linkedin size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
              ) : isTelegram ? (
                <Send size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
              ) : isInstagram ? (
                <LinkIcon size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
              ) : null}
            </a>
          );
        })}
      {showAboutLink && (
        <a
          href={aboutLink?.href}
          target={aboutLink?.target}
          rel={aboutLink?.rel}
          title={aboutLink?.label ?? "About me"}
          className="widget-button rounded-full inline-flex items-center justify-center"
          style={{
            border: `0.5px solid ${color}`,
            color,
            background: "transparent",
            padding: "5px 10px",
            fontSize: "0.875rem",
            minWidth: "32px",
            minHeight: "32px",
          }}
        >
          <LinkIcon size={Math.min(size, 20)} color={color} strokeWidth={stroke} />
        </a>
      )}
    </div>
  );
}
