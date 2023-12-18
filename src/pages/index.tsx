import { Layout } from "@components/Layout/Layout";
import { Hero } from "@partials/HomePage/Hero/Hero";
import { Events } from "@partials/HomePage/Events/Events";
import { Tools } from "@partials/HomePage/Tools/Tools";
import { Newsletter } from "@partials/Newsletter/Newsletter";

export default function Home() {
  return (
    <Layout
      title="Scala Space"
      description="Learn about our tooling, OSS, nd the ecosystems we help build, use, and participate in."
    >
      <Hero />
      <Events />
      <Tools />
      <Newsletter />
    </Layout>
  );
}
