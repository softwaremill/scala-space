import { Button } from "@components/Button/Button";
import links from "@source/footer-links.json";
import socials from "@source/footer-socials.json";
import Logo from "@assets/icons/brands/scalaspace-white.svg";
import X from "@assets/icons/socials/x.svg";
import Instagram from "@assets/icons/socials/instagram.svg";
import Linkedin from "@assets/icons/socials/linkedin.svg";
import styles from "./Footer.module.scss";

const SOCIAL_ICONS = {
  x: X,
  instagram: Instagram,
  linkedin: Linkedin,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Logo />
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.to}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.contact}>
          <p>Get involved:</p>
          <Button to="/contact" variant="white" fullWidth>
            Talk to Us
          </Button>
        </div>
        <div className={styles.socials}>
          <p>Follow Us:</p>
          <ul>
            {socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.brand];
              return (
                <li key={social.brand}>
                  <a href={social.to} target="_blank">
                    <Icon width={28} height={28} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>Copyright &copy; {currentYear} SML / Virtus Lab.</p>
        </div>
      </footer>
    </div>
  );
};
