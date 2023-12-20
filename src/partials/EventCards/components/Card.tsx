import Link from "@docusaurus/Link";
import Arrow from "@assets/icons/utils/arrow-red.svg";
import { type EventProps } from "../EventCards.types";
import globalStyles from "@css/globals.module.scss";
import styles from "./Card.module.scss";

export const Card = ({ title, description, link }: EventProps) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h3 className={globalStyles.h3}>{title}</h3>
      <p>{description}</p>
      <Link to={link.to} className={styles.link}>
        {link.label} <Arrow />
      </Link>
    </div>
  </div>
);
