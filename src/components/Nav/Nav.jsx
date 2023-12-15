import { useCallback, useState } from "react";
import Link from "@docusaurus/Link";
import links from "@source/nav-links.json";
import { useScroll } from "@hooks/useScroll";
import { useScreenDetector } from "@hooks/useScreenDetector";
import { Button } from "@components/Button/Button";
import Logo from "@assets/icons/brands/scalaspace-color.svg";
import Menu from "@assets/icons/utils/menu.svg";
import styles from "./Nav.module.scss";
import { Sidebar } from "./components/Sidebar";

const classes = {
  up: "visible",
  down: "hidden",
};

export const Nav = () => {
  const { isDesktop } = useScreenDetector();
  const direction = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => setIsOpen((prevState) => !prevState), []);

  return (
    <div className={`${styles.container} ${styles[classes[direction]]}`}>
      <nav className={styles.nav}>
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
        {!isDesktop ? (
          <>
            <div className="ml-auto">
              <button className={styles.toggler} onClick={onToggle}>
                <Menu width={21} height={11.5} />
              </button>
            </div>
            <Sidebar isOpen={isOpen} onToggle={onToggle} />
          </>
        ) : (
          <Button
            to="/contact"
            variant="secondary"
            classes="ml-auto"
            type="internal"
          >
            Talk to Us
          </Button>
        )}
      </nav>
    </div>
  );
};
