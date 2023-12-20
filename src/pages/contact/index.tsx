import { Layout } from "@components/Layout/Layout";
import { Form } from "@partials/ContactPage/Form/Form";
import { GDPR } from "@partials/ContactPage/GDPR/GDPR";

export default function Contact() {
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
