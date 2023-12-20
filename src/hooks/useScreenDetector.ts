import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  function handleWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth, { passive: true });

    handleWindowWidth();

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  const isDesktop = windowWidth >= 768;

  return { isDesktop };
};
