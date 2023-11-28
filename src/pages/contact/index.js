import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

export default function ContactPage() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "2404976",
          formId: "62a4e045-63ff-41c2-a9dd-66b4f2d54a77",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section>
          <div className="hero centered">
            <div className="container">
              <h1 className="hero__title">
                Let's
                <span className="accentColor"> talk</span>
              </h1>
              <p className="emph mb-6">about all things Scala-related</p>
              <div id="hubspotForm" className="hubspot-form" />
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
              style={{ "background-image": "url(./img/galaxy.png)" }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
