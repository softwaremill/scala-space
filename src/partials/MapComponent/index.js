import React, { useMemo, useState } from "react";
import mapStyles from "./mapStyles.json";
import style from "./styles.module.scss";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    googleMapsApiKey: "AIzaSyC5ktXPCH9x324c0MfeOt3Fi1sJYVuwsHY",
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const center = useMemo(() => ({ lat: 45.6511, lng: 0 }), []);

  const markers = [
    {
      position: { lat: 52.237049, lng: 21.017532 },
      title: "Scalar Conference",
      bio:
        "23-24\n" +
        "MAR\n" +
        "2023. Get ready for two days of immersive functional programming experience with the great community.",
      link: "https://www.scalar-conf.com/",
    },
    {
      position: { lat: 51.5072, lng: 0.1276 },
      title: "Functional Scala",
      bio:
        "NOV 30 – DEC 1, 2023\n" +
        "A two-day conference in London with amazing speakers from around the world passionate about Scala.",
      link: "https://www.functionalscala.com/",
    },
  ];

  const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoom: 4,
    maxZoom: 8,
    minZoom: 3,
    center: center,
    zoomControl: true,
    scrollwheel: false,
    gestureHandling: 'greedy',
  };
  return (
    <section>
      <div className={style.shadow} />
      {/*/!*TEMP!!! cause css must go before js*!/*/}
      {/*<link*/}
      {/*    rel="stylesheet"*/}
      {/*    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"*/}
      {/*/>*/}

      <div id="map" className={style.mapWrapper}>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap mapContainerClassName="map-container" options={mapOptions}>
            {markers.map((marker, index) => (
              <Marker
                icon={{
                  url: "./img/pin.png",
                }}
                key={index}
                position={marker.position}
                onClick={() => {
                  setSelectedMarker(marker);
                }}
              />
            ))}

            {selectedMarker && (
              <InfoWindow
                position={selectedMarker.position}
                onCloseClick={() => {
                  setSelectedMarker(null);
                }}
              >
                <div className={style.infoWindow}>
                  <h3>{selectedMarker.title}</h3>
                  <p>{selectedMarker.bio}</p>
                  <a
                    href={selectedMarker.link}
                    className="button text__primary"
                    target="_blank"
                  >
                    See more
                    <span className="icon-arrow" />
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
    </section>
  );
}
