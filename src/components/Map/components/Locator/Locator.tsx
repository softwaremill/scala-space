import { Marker } from "react-mapbox-gl";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useMapContext } from "@components/Map/context/MapContext";
import MarkerIcon from "@assets/icons/utils/marker.svg";
import { EventData } from "@components/Map/Map.types";
import { Toolitip } from "../Tooltip/Toolitip";
import { useMobileLocator } from "./hooks/useMobileLocator";
import styles from "./Locator.module.scss";

export const Locator = ({
  id,
  coordinates,
  date,
  description,
  link,
  title,
}: EventData) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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

  const mobileTooltip = useMobileLocator(tooltipProps);

  const handleMarkerClick = () => {
    setOpenedEventId(id);
  };

  return (
    <Marker coordinates={coordinates} anchor="bottom">
      <div className={styles.locator}>
        {isDesktop && <Toolitip {...tooltipProps} />}
        {mobileTooltip}
        <div onClick={handleMarkerClick}>
          <MarkerIcon />
        </div>
      </div>
    </Marker>
  );
};
