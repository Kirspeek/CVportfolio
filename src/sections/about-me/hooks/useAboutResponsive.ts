import { useMobileDetection } from "@/hooks/useMobileDetection";

export function useAboutResponsive() {
  const isSmallMobile = useMobileDetection(640);
  const isTinyMobile = useMobileDetection(375);
  const isTablet = useMobileDetection(1023) && !isSmallMobile;

  return {
    isSmallMobile,
    isTinyMobile,
    isTablet,
  };
}


