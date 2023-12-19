import "dotenv/config";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import path from "path";

const config: Config = {
  title: "Scala Pages",
  tagline: "Where Scala Meets the Industry",
  favicon: "favicon.svg",
  url: "https://scala.space",
  baseUrl: "/",
  organizationName: "SML / Virtus Lab",
  projectName: "scala.space",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  customFields: {
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
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
          "@interfaces": path.resolve(__dirname, "src/interfaces"),
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
  themeConfig: {} satisfies Preset.ThemeConfig,
  clientModules: ["./src/scripts/sidebar.ts"],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap",
    "https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css",
  ],
};

module.exports = config;
