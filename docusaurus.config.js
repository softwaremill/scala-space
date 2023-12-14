// @ts-check
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scala Pages",
  tagline: "Where Scala Meets the Industry",
  favicon: "favicon.svg",
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
  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@assets": path.resolve(__dirname, "src/assets"),
          "@components": path.resolve(__dirname, "src/components"),
          "@css": path.resolve(__dirname, "src/css"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@partials": path.resolve(__dirname, "src/partials"),
          "@source": path.resolve(__dirname, "src/source"),
        },
      },
    ],
  ],
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
  themeConfig: {},
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap",
  ],
};

module.exports = config;
