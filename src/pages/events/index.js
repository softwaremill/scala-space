import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../../components/HomepageFeatures";
import ContactBox from "../../components/ContactBox";
import MapComponent from "../../components/MapComponent";

export default function Index() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section>
          <div className="hero">
            <div className="container">
              <h1 className="hero__title">
                Where
                <span className="color-primary">
                  {" "}
                  Scala
                  <br />
                </span>
                People Meet
              </h1>
              <p>
                Join the vibrant Scala Community and shape it's future with us.
                <br />
                Explore events and engage. Contact us to add your community to
                the map.
              </p>
            </div>
          </div>
        </section>
        <MapComponent />
        <HomepageFeatures />
        <ContactBox />
      </main>
    </Layout>
  );
}
