import { Button } from "@components/Button/Button";
import ScalaTimes from "@assets/images/scala-times.webp";
import styles from "./Contact.module.scss";

export const Contact = () => (
  <section className={styles.contact}>
    <h4 className="h4">Stay current with all the Scala things</h4>
    <Button
      to="https://scalatimes.com/"
      variant="light"
      withIcon={false}
      fullWidth
    >
      Subscribe
    </Button>
    <div className={styles.logo}>
      <img src={ScalaTimes} alt="Scala Times" width={187} height={49} />
    </div>
  </section>
);
