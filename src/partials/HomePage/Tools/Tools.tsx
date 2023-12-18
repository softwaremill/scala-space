import tools from "@source/tools.json";
import { Tool } from "./components/Tool";
import globalStyles from "@css/globals.module.scss";
import styles from "./Tools.module.scss";

export const Tools = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={globalStyles.h2}>
        <span className={globalStyles["color-primary"]}>
          Simple Developers Tools &nbsp;
        </span>
        for Everyday Problems
      </h2>
    </div>

    <div className={styles.tools}>
      {tools.map((tool) => (
        <Tool key={tool.id} {...tool} />
      ))}
    </div>
  </div>
);
