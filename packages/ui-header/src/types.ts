export type SectionKey = "about" | "experience" | "projects" | "contact";

export type HeaderLink = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

export type HeaderProps = {
  title?: string;
  contactEmail?: string;
  contactLinks?: HeaderLink[];
  pill?: boolean;
  className?: string;
  defaultSection?: SectionKey;
  sections?: Array<{
    key: SectionKey;
    label: string;
  }>;
  onSectionChange?: (section: SectionKey) => void;
  getSectionHref?: (section: SectionKey) => string | undefined;
  showThemeToggle?: boolean;
  isDark?: boolean;
  onToggleTheme?: () => void;
};
