import VirtusLab from "@assets/icons/brands/virtuslab.svg";
import SMLImage from "@assets/icons/brands/softwaremill-logo.svg";
import SMLText from "@assets/icons/brands/softwaremill-text.svg";
import globalStyles from "@css/globals.module.scss";
import styles from "./Hero.module.scss";

export const Hero = () => (
  <section className={`${globalStyles.section} ${styles.hero}`}>
    <div className={styles.container}>
      <h1 className={globalStyles.h1}>
        Where <span className={globalStyles["color-primary"]}>Scala </span>
        <div className="divider" />
        Meets the Industry
      </h1>
      <p className={globalStyles["color-light"]}>
        Learn about our tooling, OSS, and the ecosystems we help build, use, and
        participate in.
      </p>
      <div className={styles.brands}>
        <a href="https://virtuslab.com/" target="_blank">
          <VirtusLab />
        </a>
        <a
          href="https://softwaremill.com/"
          target="_blank"
          className={styles.sml}
        />
      </div>
    </div>
  </section>
);
