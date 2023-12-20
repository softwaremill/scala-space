import { Button } from "@components/Button/Button";
import Toolkit from "@assets/images/tools/scala-space-toolkit.webp";
import Libs from "@assets/images/tools/scala-space-libs.webp";
import { ToolProps } from "./Tool.types";
import globalStyles from "@css/globals.module.scss";
import styles from "./Tool.module.scss";

const BG: Record<string, string> = {
  toolkit: Toolkit,
  libs: Libs,
};

export const Tool = ({ title, description, background, links }: ToolProps) => (
  <div className={styles.tool}>
    <img src={BG[background]} alt={title} width={390} height={144} />
    <div className={globalStyles.section}>
      <div className={styles.info}>
        <h3 className={globalStyles.h3}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Button key={link.label} to={link.to} variant="dark" type="external">
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  </div>
);
