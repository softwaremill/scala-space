import { Marker } from "react-mapbox-gl";
import { useToggle } from "@hooks/useToggle";
import MarkerIcon from "@assets/icons/utils/marker.svg";
import { EventData } from "@components/Map/Map.types";
import { Toolitip } from "../Tooltip/Toolitip";
import styles from "./Locator.module.scss";

export const Locator = ({
  coordinates,
  date,
  description,
  link,
  title,
}: EventData) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const tooltipProps = { isOpen, toggleIsOpen, date, description, link, title };

  return (
    <Marker coordinates={coordinates} anchor="top">
      <div className={styles.locator}>
        <Toolitip {...tooltipProps} />
        <div onClick={toggleIsOpen}>
          <MarkerIcon />
        </div>
      </div>
    </Marker>
  );
};
