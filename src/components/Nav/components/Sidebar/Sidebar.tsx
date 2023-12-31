import Link from "@docusaurus/Link";
import { type SidebarProps } from "@interfaces/sidebar";
import { Button } from "@components/Button/Button";
import Logo from "@assets/icons/brands/scalaspace-color.svg";
import Close from "@assets/icons/utils/close-gray.svg";
import sidebarLinks from "@source/sidebar-links.json";
import styles from "./Sidebar.module.scss";

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => (
  <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
    <div className={styles.header}>
      <Logo width={78} height={31} />
      <button type="button" className={styles.toggler} onClick={onToggle}>
        <Close />
      </button>
    </div>
    <ul>
      <Button to="/contact" variant="secondary" type="internal">
        Talk to Us
      </Button>
      {sidebarLinks.map((link) => (
        <li key={link.label}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);
