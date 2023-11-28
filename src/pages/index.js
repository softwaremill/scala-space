import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import EventsFeatures from "../components/EventsFeatures";
import LinksHub from "../components/LinksHub";
import ContactBox from "../components/ContactBox";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section
          className="mapHero"
          style={{ backgroundImage: `url('/img/hero.png')` }}
        >
          <div className="container">
            <h1 className="hero__title">
              Where
              <span className="accentColor">
                {" "}
                Scala
                <br />
              </span>
              Meets the Industry
            </h1>
            <p>
              Explore our tooling, open-source software (OSS), and the dynamic ecosystem <br />
              we actively contribute to, engage with, and shape.
            </p>
            <div className="heroLinks">
              <a href="https://www.virtuslab.com/" target="_blank">
                <img src="./img/virtuslab.svg" />
              </a>
              <a href="https://www.softwaremill.com/" target="_blank">
                <img src="./img/softwaremill.svg" />
              </a>
            </div>
          </div>
        </section>
        <EventsFeatures />
        <LinksHub />
        <ContactBox />
      </main>
    </Layout>
  );
}
