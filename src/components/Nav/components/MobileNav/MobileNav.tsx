import { createPortal } from "react-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { type SidebarProps } from "@interfaces/sidebar";
import Menu from "@assets/icons/utils/menu.svg";
import globalStyles from "@css/globals.module.scss";
import styles from "./MobileNav.module.scss";

export const MobileNav = ({ isOpen, onToggle }: SidebarProps) => {
  if (typeof document === "undefined") return;

  const sidebarHook = document.getElementById("sidebar-hook");

  if (sidebarHook === null) return;

  return (
    <>
      <div className={globalStyles["ml-auto"]}>
        <button className={styles.toggler} onClick={onToggle}>
          <Menu width={21} height={11.5} />
        </button>
      </div>
      {createPortal(
        <Sidebar isOpen={isOpen} onToggle={onToggle} />,
        sidebarHook,
      )}
    </>
  );
};
