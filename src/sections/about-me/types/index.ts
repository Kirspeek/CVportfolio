export type AboutSectionProps = {
  id?: string;
};

export type AboutDescriptionProps = {
  variant?: "mobile" | "tablet" | "desktop";
};

export type AboutHeroProps = Pick<AboutSectionProps, never>;

export type AboutInfoBoxProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

export type SkillsSectionProps = {
  style?: React.CSSProperties;
  variant?: "card" | "simple";
};

export type WorkExperienceSectionProps = {
  id?: string;
  style?: React.CSSProperties;
};

export type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  bullets: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProjectsSectionProps = {
  id?: string;
};

export type ContactFormProps = {
  id?: string;
};

export type ShowcaseScene = {
  label: string;
  path: string;
};

export type ProjectShowcaseCardProps = {
  baseUrl: string;
  scenes?: ShowcaseScene[];
  autoPlay?: boolean;
  cycleMs?: number;
  variant?: "card" | "panel";
  className?: string;
  style?: React.CSSProperties;
  controls?: boolean;
  desktopWidth?: number;
  desktopHeight?: number;
  queryParams?: Record<string, string | number | boolean>;
};

export type WidgetTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "centered" | "compact";
  size?: "sm" | "md" | "lg" | "xl";
};

export type HeroMetaLink = {
  text: string;
  href: string;
};

export type HeroMetaItem = {
  text: string;
  textLine2?: string;
  textLine3?: string;
  link: HeroMetaLink;
};

export type HeroData = {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  meta: {
    left: HeroMetaItem;
    center: HeroMetaItem;
    right: HeroMetaItem;
  };
};

export type AboutDescriptionData = {
  title: string;
  items: {
    mobile: string[];
    tablet: string[];
    desktop: string[];
  };
};

export type AboutData = {
  title: string;
  sectionNumber: string;
  description: AboutDescriptionData;
};

export type SkillsData = {
  title: string;
};

export type WorkExperienceNow = {
  label: string;
  next: string;
};

export type WorkExperienceData = {
  title: string;
  now: WorkExperienceNow;
};

export type ProjectsButtons = {
  liveDemo: string;
  github: string;
};

export type ProjectsSections = {
  frontend: string;
  backend: string;
  features: string;
  projectStatus: string;
  keyFeatures: string;
  techStack: string;
};

export type ProjectsData = {
  title: string;
  buttons: ProjectsButtons;
  sections: ProjectsSections;
};

export type TextsData = {
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  workExperience: WorkExperienceData;
  projects: ProjectsData;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  frontend?: string[];
  backend?: string[];
  features?: string[];
  status?: string;
  keyFeatures?: string[];
  techStack?: string[];
  desktopWidth?: number;
  desktopHeight?: number;
};

export type ProjectsDataFile = {
  projects: Project[];
};

export type WorkExperienceDataFile = {
  jobs: Job[];
};

export type SkillsDataFile = {
  palette: string[];
  categories: SkillCategory[];
};

