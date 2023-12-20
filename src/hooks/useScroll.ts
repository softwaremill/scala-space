import { useEffect, useRef, useState } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { Direction } from "@interfaces/scroll";

export const useScroll = () => {
  const isBrowser = useIsBrowser();
  const lastScrollY = useRef(isBrowser ? window.scrollY : 0);
  const [direction, setDirection] = useState<Direction>("up");

  const updatePosition = () => {
    if (lastScrollY.current < window.scrollY && window.scrollY > 300) {
      setDirection("down");
    } else {
      setDirection("up");
    }

    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return direction;
};
