import { useCallback, useState } from "react";
import Link from "@docusaurus/Link";
import { useScroll } from "@hooks/useScroll";
import { useScreenDetector } from "@hooks/useScreenDetector";
import { Button } from "@components/Button/Button";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { DesktopNav } from "./components/DesktopNav/DesktopNav";
import Logo from "@assets/icons/brands/scalaspace-color.svg";
import { type Classes } from "./Nav.types";
import globalStyles from "@css/globals.module.scss";
import styles from "./Nav.module.scss";

const classes: Classes = {
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
        <Link to="/">
          <div className={styles.logo}>
            <Logo width={78} height={31} />
          </div>
        </Link>
        {isDesktop ? <DesktopNav /> : null}
        {!isDesktop ? (
          <MobileNav isOpen={isOpen} onToggle={onToggle} />
        ) : (
          <Button
            to="/contact"
            variant="secondary"
            classes={`${globalStyles["ml-auto"]} ${styles["contact-btn"]}`}
            type="internal"
          >
            Talk to Us
          </Button>
        )}
      </nav>
    </div>
  );
};
