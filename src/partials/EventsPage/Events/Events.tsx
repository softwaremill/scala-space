import { ReactNode } from "react";
import styles from "./Events.module.scss";

export const Events = ({ children }: { children: ReactNode }) => (
  <div className={styles.events}>{children}</div>
);
