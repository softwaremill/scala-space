import React from "react";
import { links } from "./_data";
import styles from "./styles.module.scss";

function Box({ links, title, description, background }) {
  return (
    <div className="">
      <div className={styles.box}>
        <div className={styles.cover} style={{ backgroundImage: background }} />
        <article>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              {links.map(({ to, label }, idx) => (
                <a
                  key={idx}
                  className="button dark__active"
                  href={to}
                  target="_blank"
                >
                  {label}
                  <span className="icon-arrow" />
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function LinksHub() {
  return (
    <section>
      <div className={`container ${styles.hub}`}>
        <h2 className="title">
          <span className="color-primary">Simple Developers Tools </span>
          for Everyday Problems
        </h2>
        <div className="linksContainer">
          {links.map((props, idx) => (
            <Box key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
