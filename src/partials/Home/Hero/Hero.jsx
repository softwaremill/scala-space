import VirtusLab from "@assets/icons/brands/virtuslab.svg";
import SML from "@assets/icons/brands/softwaremill.svg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.container}>
        <h1 className="h1">
          Where <span className="color-primary">Scala</span>{" "}
          <div className="divider" />
          Meets the Industry
        </h1>
        <p className="color-light">
          Learn about our tooling, OSS, nd the ecosystems we help build, use,
          and participate in.
        </p>
        <div className={styles.brands}>
          <div>
            <VirtusLab />
          </div>
          <div>
            <SML />
          </div>
        </div>
      </div>
    </section>
  );
};
