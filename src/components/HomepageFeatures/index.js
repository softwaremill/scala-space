import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const FeatureList = [
  {
    title: "Join Scalar Conference",
    description: (
      <>
        Scalar - a single-track Scala conference the community love!
        <br />
        <br />
        Since 2014, Scalarians meet and discuss latest Scala trends, use cases,
        and future plans.
      </>
    ),
    link: {
      to: "https://www.scalar-conf.com/",
      label: "Join us",
    },
  },
  {
    title: "Join our local meetups",
    description: (
      <>
        Grab a drink of choice and let’s have fun with Scala and FP
        <br />
        <br />
        Browse upcoming local Scala User Groups that are happening in your
        areal!
      </>
    ),
    link: {
      to: "https://www.meetup.com/topics/scala/all",
      label: "Check meetups",
    },
  },
];

function Feature({ link, title, description }) {
  return (
    <div className={clsx("col col--6 borderRight")}>
      <div className={styles.box}>
        <h3>{title}</h3>
        <p className="mb-4">{description}</p>
        <a className="button text__primary" href={link.to} target="_blank">
          {link.label}
          <span className="icon-arrow" />
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="wrapper">
      <div className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
