import Link from "@docusaurus/Link";
import links from "@source/footer-links.json";
import styles from "../Footer.module.scss";

export const Links = () => (
  <ul className={styles.links}>
    {links.map((link) => (
      <li key={link.label}>
        {link.type === "internal" ? (
          <Link to={link.to}>{link.label}</Link>
        ) : (
          <a href={link.to} target="_blank">
            {link.label}
          </a>
        )}
      </li>
    ))}
  </ul>
);
