import Link from "@docusaurus/Link";
import { Button } from "@components/Button/Button";
import Logo from "@assets/icons/brands/scalaspace-white.svg";
import { Links } from "./partials/Links";
import { Socials } from "./partials/Socials";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Link to="/">
          <Logo />
        </Link>
        <Links />
        <div className={styles.contact}>
          <p>Get involved:</p>
          <Button to="/contact" variant="white" fullWidth type="internal">
            Talk to Us
          </Button>
        </div>
        <div className={styles.socials}>
          <p>Follow Us:</p>
          <Socials />
        </div>
        <div className={styles.copyright}>
          <p>Copyright &copy; {currentYear} SML / Virtus Lab.</p>
        </div>
      </footer>
    </div>
  );
};
