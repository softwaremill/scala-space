import globalStyles from "@css/globals.module.scss";
import styles from "./GDPR.module.scss";

export const GDPR = () => (
  <div className={styles.container}>
    <div className={styles.col1}>
      <h3 className={globalStyles.h3}>GDPR compliance</h3>
      <p>DPO / RODO</p>
      <a href="mailto:dpo@virtuslab.com" className={styles.mail}>
        dpo@virtuslab.com
      </a>
    </div>
    <div className={styles.col2}></div>
  </div>
);
