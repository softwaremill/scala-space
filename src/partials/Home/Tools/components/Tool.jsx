import { Button } from "@components/Button/Button";
import Toolkit from "@assets/images/tools/scala-space-toolkit.webp";
import Libs from "@assets/images/tools/scala-space-libs.webp";
import styles from "./Tool.module.scss";

const BG = {
  toolkit: Toolkit,
  libs: Libs,
};

export const Tool = ({ tool }) => {
  return (
    <div className={styles.tool}>
      <img
        src={BG[tool.background]}
        alt={tool.title}
        width={390}
        height={144}
      />
      <div className="section">
        <div className={styles.info}>
          <h3 className="h3">{tool.title}</h3>
          <p>{tool.description}</p>
        </div>
        <div className={styles.links}>
          {tool.links.map((link) => (
            <Button to={link.to} key={link.label}>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
