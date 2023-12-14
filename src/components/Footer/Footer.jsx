// '<a href="https://twitter.com/ScalaSpace" target="_blank"><img src="./img/logo-x.svg"/></a>' +
// '<a href="https://www.instagram.com/softwaremill_vibes/" target="_blank"><img src="./img/logo-blank.svg"/></a>' +
// '<a href="https://www.linkedin.com/showcase/scala-space" target="_blank"><img src="./img/logo-linkedin.svg"/></a>' +

// {
//     label: "Privacy Policy",
//     to: "https://virtuslab.com/privacy-policy/",
//   },

// copyright: `Copyright &copy; ${new Date().getFullYear()} SML / Virtus Lab.`,
import styles from "./Footer.module.scss";

export const Footer = () => {
  return <footer className={styles.footer}>Footer</footer>;
};
