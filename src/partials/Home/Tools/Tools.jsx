import tools from "@source/tools.json";
import { Tool } from "./components/Tool";
import styles from "./Tools.module.scss";

export const Tools = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className="h2">
          <span className="color-primary">Simple Developers Tools </span>
          for Everyday Problems
        </h2>
      </div>

      <div className={styles.tools}>
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};
