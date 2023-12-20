import { Map } from "@components/Map/Map";
import scalarEvents from "@source/scalar-events.json";

export const EventsMap = () => (
  <section>
    <Map markers={scalarEvents} />
  </section>
);
