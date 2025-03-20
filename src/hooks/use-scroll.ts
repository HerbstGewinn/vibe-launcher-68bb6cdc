
import { useState, useEffect } from "react";

/**
 * Hook that tracks whether the user has scrolled past a certain threshold
 * @param threshold The scroll threshold in pixels
 * @returns boolean indicating if the user has scrolled past the threshold
 */
export function useScroll(threshold: number = 0): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
