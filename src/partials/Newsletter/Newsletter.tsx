import { Button } from "@components/Button/Button";
import globalStyles from "@css/globals.module.scss";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => (
  <section className={styles.contact}>
    <h4 className={globalStyles.h4}>Stay current with all the Scala things</h4>
    <Button
      to="https://scalatimes.com/"
      variant="light"
      withIcon={false}
      fullWidth
      type="external"
    >
      Join the newsletter
    </Button>
    <a className={styles.logo} href="https://scalatimes.com/" target="_blank">
      <p className={styles.top}>
        <span>&nbsp;⋆&nbsp;⋆&nbsp;</span>Est. 2014
        <span>&nbsp;⋆&nbsp;⋆&nbsp;</span>
      </p>
      <p className={styles.middle}>Scala Times</p>
      <p className={styles.bottom}>Weekly Scala newspaper</p>
    </a>
  </section>
);
