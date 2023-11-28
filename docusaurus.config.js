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

  plugins: [
    "docusaurus-plugin-sass",
    // 'docusaurus-plugin-hubspot',
  ],

  // webpack: {
  //   alias: {
  //     'leaflet-hash': 'leaflet-hash/dist/leaflet-hash'
  //   },
  //   // Other webpack configurations
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: 'Scala Pages_',
        hideOnScroll: true,

        logo: {
          alt: "scala pages",
          src: "img/scalaspace-logo-color.svg",
        },
        items: [
          {
            html: '<a class="button primary aligned">Talk to us <img src="img/arrow_b.svg"/></a>',
            to: "/contact",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   src: 'img/logo_white.png',
        //   href: 'https://opensource.fb.com',
        //   height: 51,
        // },
        links: [
          {
            items: [
              {
                html: '<img src="img/scalaspace-logo-white.svg"/>',
              },
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
                html: '<p>Get involved</p>',
              },
              {
                html: '<a class="button secondary aligned" href="/contact">Talk to us <img src="img/arrow_d.svg"/></a>',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SML / Virtus Lab.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
