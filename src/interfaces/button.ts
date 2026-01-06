export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string;
}

export interface Button3DProps {
  children?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  customBackground?: string;
  customAccentColor?: string;
}
