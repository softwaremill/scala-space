import { Marker } from "react-mapbox-gl";
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

  const handleMarkerClick = () => {
    setOpenedEventId(id);
  };

  return (
    <Marker coordinates={coordinates} anchor="top">
      <div className={styles.locator}>
        <Toolitip {...tooltipProps} />
        <div onClick={handleMarkerClick}>
          <MarkerIcon />
        </div>
      </div>
    </Marker>
  );
};
