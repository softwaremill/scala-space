import Link from "@docusaurus/Link";
import { type ButtonProps } from "./Button.types";
import { renderIcon } from "./Button.helper";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  type = "external",
  to,
  variant = "dark",
  fullWidth = false,
  withIcon = true,
  classes = "",
}: ButtonProps) => {
  const commonClasses = `${styles.btn} ${styles[variant]} ${
    fullWidth ? styles["w-full"] : ""
  } ${classes}`;

  const Children = () => (
    <>
      {children}
      {withIcon && renderIcon(variant)}
    </>
  );

  if (type === "external") {
    return (
      <a target="_blank" className={commonClasses} href={to}>
        <Children />
      </a>
    );
  }

  if (type === "internal") {
    return (
      <Link to={to} className={commonClasses}>
        <Children />
      </Link>
    );
  }
};
