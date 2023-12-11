// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scala Pages",
  tagline: "Where Scala Meets the Industry",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "__", // Usually your GitHub org/user name.
  projectName: "___", // Usually your repo name.

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: require.resolve("./src/css/index.scss"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "scala pages",
          src: "img/scalaspace-logo-color.svg",
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
            items: [
              {
                html: '<img src="img/scalaspace-logo-white.svg"/>',
              },
            ],
          },
          {
            items: [
              {
                label: "Scala space",
                to: "/",
              },
              {
                label: "Privacy Policy",
                to: "https://virtuslab.com/privacy-policy/",
              },
              {
                label: "Contact",
                to: "/contact",
              },
            ],
          },
          {
            items: [
              {
                html: "<p>Get involved:</p>",
              },
              {
                html: '<a class="button secondary aligned" href="/contact">Talk to us <img src="img/arrow_d.svg"/></a>',
              },
            ],
          },
          {
            items: [
              {
                html: "<span class='label'>Follow us</span>",
              },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
