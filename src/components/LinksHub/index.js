import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Links = [
  {
    title: "Scala Toolkit",
    description: (
      <>
        A set of Libraries desgined to effectively perform common programming
        tasks
      </>
    ),
    background: "url(./img/scala-space-toolkit.jpg)",
    links: [
      {
        to: "https://docs.scala-lang.org/toolkit/http-client-intro.html",
        label: "MUnit",
      },
      {
        to: "https://docs.scala-lang.org/toolkit/http-client-intro.html",
        label: "sttp",
      },
      {
        to: "https://docs.scala-lang.org/toolkit/json-intro.html",
        label: "UPickle/Ujson",
      },
      {
        to: "https://docs.scala-lang.org/toolkit/os-intro.html",
        label: "Os-Lib",
      },
    ],
  },
  {
    title: "Useful Libraries",
    description: (
      <>Open Source tools that Scala Community use and appreciate.</>
    ),
    background: "url(./img/scala-space-libs.jpg)",
    links: [
      {
        to: "https://github.com/softwaremill/tapir",
        label: "Tapir",
      },
      {
        to: "https://github.com/scalameta/metals",
        label: "metals",
      },
      {
        to: "https://github.com/scalacenter/bloop",
        label: "bloop",
      },
    ],
  },
];

function Box({ links, title, description, background }) {
  return (
    <div className={clsx("col col--6")}>
      <div className={styles.box}>
        <div className={styles.cover} style={{ backgroundImage: background }} />
        <article>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.linksWrapper}>
          <div className={styles.links}>
            {links.map(({ to, label }) => (
              <a className="button dark__active" href={to} target="_blank">
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
      <div className="container">
        <h2 className="title">
          <span className="accentColor">Simple Developers Tools </span>
          for Everyday Problems
        </h2>
          <div className="row linksContainer">
            {Links.map((props, idx) => (
              <Box key={idx} {...props} />
            ))}
          </div>
      </div>
    </section>
  );
}
