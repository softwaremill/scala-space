import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const EventsList = [
  {
    title: "Scala 3",
    description: (
      <>
        Development of Scala 3 compiler to make Scala easier and safer to use.
      </>
    ),
    link: {
      to: "https://virtuslab.com/blog/the-scala-3-compatibility-story/",
      label: "Visit",
    },
  },
  {
    title: "Open Community Build",
    description: (
      <>
        A testing system designed to find regressions in the Scala 3 compiler.
      </>
    ),
    link: {
      to: "https://virtuslab.com/blog/how-to-be-a-part-of-scalas-open-community-build/",
      label: "Talk to us",
    },
  },
  {
    title: "Scala CLI",
    description: (
      <>
        A runner on steroids that help you compile, run, test, and package your
        Scala code!
      </>
    ),
    link: {
      to: "https://scala-cli.virtuslab.org/",
      label: "Use",
    },
  },
];

function Event({ link, title, description }) {
  return (
    <div className={clsx("col col--4 borderRight")} >
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button text__primary" href={link.to} target="_blank">
          {link.label}
          <span className="icon-arrow" />
        </a>
      </div>
    </div>
  );
}

export default function EventsFeatures() {
  return (
    <section className="wrapper">
      <div className={styles.features}>
        <div className="container">
          <h2 className="title">
            <span className="accentColor">Elevating Developers</span>,
            Empowering Industries
          </h2>
          <div className="row">
            {EventsList.map((props, idx) => (
              <Event key={idx} {...props}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
