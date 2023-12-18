import VirtusLab from "@assets/icons/brands/virtuslab.svg";
import SML from "@assets/icons/brands/softwaremill.svg";
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
        Learn about our tooling, OSS, nd the ecosystems we help build, use, and
        participate in.
      </p>
      <div className={styles.brands}>
        <a href="https://virtuslab.com/" target="_blank">
          <VirtusLab />
        </a>
        <a href="https://softwaremill.com/" target="_blank">
          <SML />
        </a>
      </div>
    </div>
  </section>
);
