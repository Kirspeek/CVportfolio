import React from "react";

export interface TooltipData {
  content: React.ReactNode;
  x: number;
  y: number;
  visible?: boolean;
  title?: string;
  subtitle?: string;
  color?: string;
}

export interface TooltipContextType {
  showTooltip: (data: TooltipData) => void;
  hideTooltip: () => void;
  tooltip: TooltipData | null;
}

export interface TooltipProviderProps {
  children: React.ReactNode;
}

