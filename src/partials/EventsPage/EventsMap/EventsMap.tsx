import { Map } from "@components/Map/Map";
import scalarEvents from "@source/scala-events.json";

export const EventsMap = () => (
  <section id="mapbox-container">
    <Map markers={scalarEvents} />
  </section>
);
