import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Marker } from "react-mapbox-gl";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useMapContext } from "@components/Map/context/MapContext";
import MarkerIcon from "@assets/icons/utils/marker.svg";
import { EventData } from "@components/Map/Map.types";
import { Toolitip } from "../Tooltip/Toolitip";
import styles from "./Locator.module.scss";

export const Locator = ({
  id,
  coordinates,
  date,
  description,
  link,
  title,
}: EventData) => {
  const mobileTooltipRef = useRef<HTMLInputElement>(null);
  const matches = useMediaQuery("(min-width: 768px)");
  const { openedEventId, setOpenedEventId } = useMapContext();
  const tooltipProps = {
    id,
    openedEventId,
    setOpenedEventId,
    date,
    description,
    link,
    title,
  };

  const mobileTooltip = !matches
    ? createPortal(
        <Toolitip {...tooltipProps} ref={mobileTooltipRef} />,
        document.getElementById("tooltip-hook")!,
      )
    : null;

  useEffect(() => {
    if (!matches) {
      mobileTooltipRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [openedEventId]);

  const handleMarkerClick = () => {
    setOpenedEventId(id);
  };

  return (
    <Marker coordinates={coordinates} anchor="bottom">
      <div className={styles.locator}>
        {matches && <Toolitip {...tooltipProps} />}
        {mobileTooltip}
        <div onClick={handleMarkerClick}>
          <MarkerIcon />
        </div>
      </div>
    </Marker>
  );
};
