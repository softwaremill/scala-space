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
}) => {
  if (type === "external") {
    return (
      <a
        className={`${styles.btn} ${styles[variant]} ${
          fullWidth ? styles["w-full"] : ""
        }`}
        href={to}
      >
        {children}
        {variant === "white" ? <ArrowBlack /> : <ArrowWhite />}
      </a>
    );
  }

  if (type === "internal") {
    return <Link to={to}>{children}</Link>;
  }

  throw new Error('Unknown button type. Select "internal" or "external"');
};
