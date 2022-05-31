// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clearpath Robotics Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/site-images/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: ' ',
        logo: {
          alt: 'Clearpath Robotics',
          src: 'img/site-images/logo_yellow.png',
          srcDark: 'img/site-images/logo_white.png',
        },
        items: [
          {
            label: 'Documentation',
            position: 'left',
            type: 'doc',
            docId: 'index_documentation',
          },
          {
            to: 'about',
            label: 'About',
            position: 'left'
          },
          {
            to: 'https://github.com/clearpathrobotics',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://clearpathrobotics.com/',
            label: 'Home',
            position: 'right'
          },
          {
            to: 'https://store.clearpathrobotics.com/',
            label: 'Store',
            position: 'right'
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
