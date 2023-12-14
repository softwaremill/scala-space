import React from "react";
import { Layout } from "@components/Layout/Layout";
import { Hero } from "@partials/Home/Hero/Hero";
import { Events } from "@partials/Home/Events/Events";
import { Tools } from "@partials/Home/Tools/Tools";
import { Contact } from "@partials/Home/Contact/Contact";

export default function Home() {
  return (
    <Layout
      title="Scala Space"
      description="Learn about our tooling, OSS, nd the ecosystems we help build, use, and participate in."
    >
      <Hero />
      <Events />
      <Tools />
      <Contact />
    </Layout>
  );
}
