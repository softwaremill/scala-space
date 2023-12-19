import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ReactMapboxGl from "react-mapbox-gl";
import { MapProps } from "./Map.types";
import { mapConfig } from "./Map.constants";
import { Locator } from "./components/Locator/Locator";
import "mapbox-gl/dist/mapbox-gl.css";

export const Map = ({ markers }: MapProps) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const accessToken = customFields!.mapboxAccessToken as string;
  const MapBox = ReactMapboxGl({ accessToken });

  return (
    <MapBox
      style={mapConfig.style}
      containerStyle={mapConfig.containerStyle}
      zoom={[mapConfig.initialZoom]}
      center={[mapConfig.initialLon, mapConfig.initialLat]}
    >
      {markers.map((el) => (
        <Locator key={el.id} {...el} />
      ))}
    </MapBox>
  );
};
