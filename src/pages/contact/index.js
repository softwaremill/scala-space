import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useCreateForm } from "./_useCreateForm";
import { useScreenDetector } from "@hooks/useScreenDetector";
import styles from "./styles.module.scss";
import VLMobile from "@assets/images/virtus-mobile.webp";
import VLDesktop from "@assets/images/virtus-desktop.webp";

export default function ContactPage() {
  const { siteConfig } = useDocusaurusContext();
  const { isDesktop } = useScreenDetector();
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
                <div className={styles.subtitle}>
                  <p className="emph m-0">about all things</p>
                  <p className="emph">Scala-related</p>
                </div>
              </div>
              <div id="hubspot-form" className="contact-form" />
            </div>
          </div>
        </section>

        <section className={styles["section--2"]}>
          <div className={styles["box--1"]}>
            <h3>GDPR compliance</h3>
            <p>DPO / RODO</p>
            <a className="textLink" href="mailto: dpo@virtuslab.com">
              dpo@virtuslab.com
            </a>
          </div>
          <div className={styles["box--2"]}>
            <img
              src={isDesktop ? VLDesktop : VLMobile}
              alt="VirtusLab"
              width="375"
              height="279"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
