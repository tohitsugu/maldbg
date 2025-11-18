<<<<<<< HEAD
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Maldbg - Malware Analysis Blog',
  tagline: 'Exploring malicious code and malware',
  organizationName: 'tohitsugu',
  projectName: 'maldbg',
  baseUrl: '/',
  url: 'https://maldbg.com',
  // We can only warn now, since we have blog pages linking to non-blog pages...
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themes: ['live-codeblock'],
=======
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maldbg - Documentation Portfolio and Occasional Malware Analysis Blog',
  tagline: 'Exploring malicious code and malware',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://maldbg.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tohitsugu', // Usually your GitHub org/user name.
  projectName: 'maldbg', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

>>>>>>> b85e6b9b7b890fca1bb13b69a9c6c567e31f196a
  plugins: ['ideal-image'],
  presets: [
    [
      'classic',
<<<<<<< HEAD
      {
        docs: true,
        pages: false,
        blog: {
          routeBasePath: '/blog',
          path: 'blog',
          editUrl: 'https://github.com/tohitsugu/maldbg/',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Maldbg`,
          },
=======
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tohitsugu/maldbg/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tohitsugu/maldbg/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
>>>>>>> b85e6b9b7b890fca1bb13b69a9c6c567e31f196a
        },
        theme: {
          customCss: './src/css/custom.css',
        },
<<<<<<< HEAD
      },
    ],
  ],
  themeConfig: {
    image: 'img/header.jpg',
    algolia: {
      appId: 'D91Z5P8PPK',
      apiKey: '20a19dad98fb9a460281402dd6226bde',
      indexName: 'maldbg',
      contextualSearch: true,
      insights: true,
    },
    announcementBar: {
      id: 'announcementBar-3', // Increment on change
      content: `Check for updates`,
    },
    navbar: {
      hideOnScroll: true,
      title: 'MalDbg',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
        href: 'https://github.com/tohitsugu/maldbg',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
      {
        href: 'https://t.me/tohitsugu',
        position: 'right',
        className: 'header-telegram-link',
        'aria-label': 'Telegram',
      },
    ],
    },
  },
};
=======
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/header.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'D91Z5P8PPK',
        apiKey: '20a19dad98fb9a460281402dd6226bde',
        indexName: 'maldbg',
        contextualSearch: true,
        insights: true,
      },
      navbar: {
        title: 'MalDbg',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/blog', label: 'Malware Blog', position: 'left'},
          {
            href: 'https://github.com/tohitsugu/maldbg',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          /*{
            href: 'https://github.com/tohitsugu/maldbg',
            label: 'GitHub',
            position: 'right',
          },*/
          {
            href: 'https://t.me/tohitsugu',
            position: 'right',
            className: 'header-telegram-link',
            'aria-label': 'Telegram',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Portfolio',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maldbg`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
>>>>>>> b85e6b9b7b890fca1bb13b69a9c6c567e31f196a
