import { ReactNode } from "react";
import styles from "./Events.module.scss";

export const Events = ({ children }: { children: ReactNode }) => (
  <section className={styles.section}>
    <div className={styles.events}>{children}</div>
  </section>
);
