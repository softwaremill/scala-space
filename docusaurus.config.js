// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scala Pages",
  tagline: "Where Scala Meets the Industry",
  favicon: "img/logo.svg",
  url: "https://scala.space",
  baseUrl: "/",
  organizationName: "SML / Virtus Lab",
  projectName: "scala.space",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: ["./src/css/index.scss"],
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Scala Pages",
          src: "img/scalaspace-logo-color.svg",
          width: 78,
          height: 31,
        },
        items: [
          {
            html: '<span class="button accent aligned">Talk to us <img src="img/arrow_b_black.svg"/></span>',
            to: "/contact",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [{ html: '<img src="img/scalaspace-logo-white.svg"/>' }],
          },
          {
            items: [
              { label: "Scala space", to: "/" },
              {
                label: "Privacy Policy",
                to: "https://virtuslab.com/privacy-policy/",
              },
              { label: "Contact", to: "/contact" },
            ],
          },
          {
            items: [
              { html: "<p>Get involved:</p>" },
              {
                html: '<a class="button secondary aligned" href="/contact">Talk to us <img src="img/arrow_d.svg"/></a>',
              },
            ],
          },
          {
            items: [
              { html: "<span class='label'>Follow us</span>" },
              {
                html:
                  '<div class="socials">' +
                  '<a href="https://twitter.com/ScalaSpace" target="_blank"><img src="./img/logo-x.svg"/></a>' +
                  '<a href="https://www.instagram.com/softwaremill_vibes/" target="_blank"><img src="./img/logo-blank.svg"/></a>' +
                  '<a href="https://www.linkedin.com/showcase/scala-space" target="_blank"><img src="./img/logo-linkedin.svg"/></a>' +
                  "</div>",
              },
            ],
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} SML / Virtus Lab.`,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap",
  ],
};

module.exports = config;
