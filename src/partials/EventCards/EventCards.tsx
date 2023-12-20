import { Card } from "./components/Card";
import styles from "./EventCards.module.scss";
import { type EventProps } from "./EventCards.types";

export const EventCards = ({ events }: { events: EventProps[] }) => {
  const classes = `cards${events.length}`;

  return (
    <div className={`${styles.cards} ${styles[classes]}`}>
      {events.map((event) => (
        <Card key={event.id} {...event} />
      ))}
    </div>
  );
};
