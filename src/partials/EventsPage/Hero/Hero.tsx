import globalStyles from "@css/globals.module.scss";
import styles from "./Hero.module.scss";

export const Hero = () => (
  <section className={`${globalStyles.section} ${styles.hero}`}>
    <div className={styles.container}>
      <h1 className={globalStyles.h1}>
        Where <span className={globalStyles["color-primary"]}>Scala </span>
        <div className="divider" />
        People Meet
      </h1>
      <p className={globalStyles["color-light"]}>
        Join the vibrant Scala Community and shape it's future with us. Explore
        events and engage. Contact us to add your community to the map.
      </p>
    </div>
  </section>
);
