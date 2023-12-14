import events from "@source/events.json";
import { Card } from "./components/Card";
import styles from "./Events.module.scss";

export const Events = () => (
  <section>
    <div className={styles.header}>
      <h2 className="h2">
        <span className="color-primary">Elevating Developers</span>, Empowering
        Industries
      </h2>
    </div>
    {events.map((event) => (
      <Card key={event.id} event={event} />
    ))}
  </section>
);
