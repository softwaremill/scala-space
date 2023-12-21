import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapContextProvider } from "./context/MapContext";
import { MapProps } from "./Map.types";
import { mapConfig } from "./Map.constants";
import { Locator } from "./components/Locator/Locator";
import styles from "./Map.module.scss";

export const Map = ({ markers }: MapProps) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const accessToken = customFields!.mapboxAccessToken as string;
  const MapBox = ReactMapboxGl({ accessToken, scrollZoom: false });

  return (
    <MapContextProvider>
      <MapBox
        style={mapConfig.style}
        className={styles.container}
        zoom={[mapConfig.initialZoom]}
        center={[mapConfig.initialLon, mapConfig.initialLat]}
      >
        <>
          {markers.map((el) => (
            <Locator key={el.id} {...el} />
          ))}
          <ZoomControl position="bottom-right" />
        </>
      </MapBox>
    </MapContextProvider>
  );
};
