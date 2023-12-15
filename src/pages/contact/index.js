import React from "react";
import { Layout } from "@components/Layout/Layout";
import { Form } from "@partials/Contact/Form/Form";
import { GDPR } from "@partials/Contact/GDPR/GDPR";

export default function ContactPage() {
  return (
    <Layout
      title="Scala Space"
      description="Learn about our tooling, OSS, nd the ecosystems we help build, use, and participate in."
    >
      <Form />
      <GDPR />
    </Layout>
  );
}
