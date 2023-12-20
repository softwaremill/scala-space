import { Button } from "@components/Button/Button";
import ScalaTimes from "@assets/images/scala-times.webp";
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
    <div className={styles.logo}>
      <img src={ScalaTimes} alt="Scala Times" width={187} height={49} />
    </div>
  </section>
);
