import Link from "@docusaurus/Link";
import Arrow from "@assets/icons/utils/arrow-red.svg";
import styles from "./Card.module.scss";

export const Card = ({ event }) => (
  <div className={styles.card}>
    <h3 className="h3">{event.title}</h3>
    <p>{event.description}</p>
    <Link to={event.link.to} className={styles.link}>
      {event.link.label} <Arrow />
    </Link>
  </div>
);
