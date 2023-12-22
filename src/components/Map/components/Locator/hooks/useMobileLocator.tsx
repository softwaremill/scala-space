import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePrevious } from "@hooks/usePrevious";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Toolitip } from "../../Tooltip/Toolitip";

type UseMobileLocatorProps = {
  id: number;
  openedEventId: number | null;
  setOpenedEventId: (id: number | null) => void;
  date: string;
  description: string;
  link: string;
  title: string;
};

export const useMobileLocator = (props: UseMobileLocatorProps) => {
  const { openedEventId } = props;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const mobileTooltipRef = useRef<HTMLInputElement>(null);
  const previousOpenEventId = usePrevious(openedEventId);

  const mobileTooltip = !isDesktop
    ? createPortal(
        <Toolitip {...props} ref={mobileTooltipRef} />,
        document.getElementById("tooltip-hook")!,
      )
    : null;

  useEffect(() => {
    if (!isDesktop && !!openedEventId) {
      mobileTooltipRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (!isDesktop && previousOpenEventId !== undefined && !openedEventId) {
      const element = document.getElementById("mapbox-container");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [openedEventId]);

  return mobileTooltip;
};
