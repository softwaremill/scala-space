import React from "react";
import { events } from "./_data";
import styles from "./styles.module.scss";

function Event({ link, title, description }) {
  return (
    <div className={styles.event}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="button text__primary" href={link.to} target="_blank">
        {link.label}
        <span className="icon-arrow" />
      </a>
    </div>
  );
}

export default function EventsFeatures() {
  return (
    <section>
      <div className={styles.features}>
        <div className="container">
          <h2 className="title">
            <span className="color-primary">Elevating Developers</span>,
            Empowering Industries
          </h2>
          <div className={styles.events}>
            {events.map((props, idx) => (
              <Event key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
