import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { useCreateForm } from "./_useCreateForm";

export default function ContactPage() {
  const { siteConfig } = useDocusaurusContext();
  useCreateForm();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section>
          <div className="hero">
            <div className="container">
              <div className="hero__title">
                <h1>
                  Let's
                  <span className="color-accent-light"> talk</span>
                </h1>
                <p className="emph m-0">about all things</p>
                <p className="emph">Scala-related</p>
              </div>
              <div id="hubspotForm" />
            </div>
          </div>
        </section>

        <section style={{ overflow: "hidden" }}>
          <div className="row">
            <div className={clsx("col col--6 gdprWrapper")}>
              <div>
                <h3>GDPR compliance</h3>
                <p>DPO / RODO</p>
                <a className="textLink" href="mailto: dpo@virtuslab.com">
                  dpo@virtuslab.com
                </a>
              </div>
            </div>

            <div
              className={clsx("col col--6 imageBg")}
              style={{ backgroundImage: "url(./img/galaxy.png)" }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
