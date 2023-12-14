import Head from "@docusaurus/Head";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

export const Layout = ({
  children,
  title = "Scala Space",
  description = "Where Scala Meets the Industry",
}) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Nav />
    {children}
    <Footer />
  </main>
);
