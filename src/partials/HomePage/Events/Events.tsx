import events from "@source/homepage-events.json";
import globalStyles from "@css/globals.module.scss";
import styles from "./Events.module.scss";
import { EventCards } from "@partials/EventCards/EventCards";

export const Events = () => (
  <section className={styles.section}>
    <div className={styles.events}>
      <div className={styles.header}>
        <h2 className={globalStyles.h2}>
          <span className={globalStyles["color-primary"]}>
            Elevating Developers
          </span>
          , Empowering Industries
        </h2>
      </div>
      <EventCards events={events} />
    </div>
  </section>
);
