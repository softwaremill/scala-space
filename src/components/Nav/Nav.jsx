import Link from "@docusaurus/Link";
import links from "@source/nav-links.json";
import { useScroll } from "@hooks/useScroll";
import Logo from "@assets/icons/brands/scalaspace-color.svg";
import Menu from "@assets/icons/utils/menu.svg";
import styles from "./Nav.module.scss";

const classes = {
  up: "visible",
  down: "hidden",
};

export const Nav = () => {
  const direction = useScroll();

  return (
    <nav className={`${styles.nav} ${styles[classes[direction]]}`}>
      <div className={styles.logo}>
        <Logo width={78} height={31} />
      </div>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={styles["toggler-container"]}>
        <button className={styles.toggler}>
          <Menu width={21} height={11.5} />
        </button>
      </div>
    </nav>
  );
};
