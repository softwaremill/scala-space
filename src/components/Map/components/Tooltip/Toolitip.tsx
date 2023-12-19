import Link from "@docusaurus/Link";
import { TooltipProps } from "./Tooltip.types";
import Arrow from "@assets/icons/utils/arrow-red.svg";
import Close from "@assets/icons/utils/close-black.svg";
import styles from "./Tooltip.module.scss";

export const Toolitip = ({
  isOpen,
  toggleIsOpen,
  date,
  description,
  link,
  title,
}: TooltipProps) => {
  const tooltipContainerStyles = `${styles["tooltip-container"]} ${
    isOpen ? styles.opened : ""
  }`;

  return (
    <div className={tooltipContainerStyles}>
      <div className={styles.tooltip}>
        <button className={styles.close} onClick={toggleIsOpen}>
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
};
