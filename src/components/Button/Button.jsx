import Link from "@docusaurus/Link";
import ArrowWhite from "@assets/icons/utils/arrow-white.svg";
import ArrowBlack from "@assets/icons/utils/arrow-black.svg";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  type = "external",
  to,
  variant = "dark",
  fullWidth = false,
  withIcon = true,
  classes = "",
}) => {
  if (type === "external") {
    return (
      <a
        target="_blank"
        className={`${styles.btn} ${styles[variant]} ${
          fullWidth ? styles["w-full"] : ""
        } ${classes}`}
        href={to}
      >
        {children}
        {withIcon &&
          (variant === "white" || variant === "secondary" ? (
            <ArrowBlack />
          ) : (
            <ArrowWhite />
          ))}
      </a>
    );
  }

  if (type === "internal") {
    return (
      <Link
        to={to}
        className={`${styles.btn} ${styles[variant]} ${
          fullWidth ? styles["w-full"] : ""
        } ${classes}`}
      >
        {children}
        {withIcon &&
          (variant === "white" || variant === "secondary" ? (
            <ArrowBlack />
          ) : (
            <ArrowWhite />
          ))}
      </Link>
    );
  }

  throw new Error('Unknown button type. Select "internal" or "external"');
};
