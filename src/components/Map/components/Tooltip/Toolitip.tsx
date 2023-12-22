import { Ref, forwardRef } from "react";
import Link from "@docusaurus/Link";
import { TooltipProps } from "./Tooltip.types";
import Arrow from "@assets/icons/utils/arrow-red.svg";
import Close from "@assets/icons/utils/close-black.svg";
import styles from "./Tooltip.module.scss";

export const Toolitip = forwardRef<HTMLInputElement, TooltipProps>(
  (
    { id, openedEventId, setOpenedEventId, date, description, link, title },
    ref: Ref<HTMLInputElement>,
  ) => {
    const tooltipContainerStyles = `${styles["tooltip-container"]} ${
      openedEventId === id ? styles.opened : ""
    }`;

    const onCloseTooltip = () => {
      setOpenedEventId(null);
    };

    return (
      <div className={tooltipContainerStyles} ref={ref}>
        <div className={styles.tooltip}>
          <button className={styles.close} onClick={onCloseTooltip}>
            <Close />
          </button>
          <p className={styles.title}>{title}</p>
          <p>
            <span className={styles.date}>{date}. </span>
            <span className={styles.description}>{description}</span>
          </p>
          <Link to={link} className={styles.link}>
            See more <Arrow />
          </Link>
        </div>
      </div>
    );
  },
);
