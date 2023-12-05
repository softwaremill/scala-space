import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useCreateForm } from "./_useCreateForm";
import styles from "./styles.module.scss";
import VLMobile from "../../assets/virtus-mobile.webp";

export default function ContactPage() {
  const { siteConfig } = useDocusaurusContext();
  useCreateForm();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <main className="contact">
        <section>
          <div className="hero">
            <div className="container">
              <div className="hero__title">
                <h1 className="h1">
                  Let's
                  <span className="color-accent-light"> talk</span>
                </h1>
                <p className="emph m-0">about all things</p>
                <p className="emph">Scala-related</p>
              </div>
              <div id="hubspot-form" className="contact-form" />
            </div>
          </div>
        </section>

        <section>
          <div className={styles["box--1"]}>
            <h3>GDPR compliance</h3>
            <p>DPO / RODO</p>
            <a className="textLink" href="mailto: dpo@virtuslab.com">
              dpo@virtuslab.com
            </a>
          </div>
          <div className={styles["box--2"]}>
            <img src={VLMobile} alt="VirtusLab" width="375" height="279" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
