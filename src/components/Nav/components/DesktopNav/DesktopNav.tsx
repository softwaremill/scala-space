import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import links from "@source/nav-links.json";
import { LinkTypes } from "./DesktopNav.types";
import styles from "./DesktopNav.module.scss";

export const DesktopNav = () => {
  const location = useLocation();
  const activeUrl = location.pathname;

  return (
    <ul className={styles.links}>
      {links.map((link: LinkTypes) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className={link.to === activeUrl ? styles.active : ""}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
