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
  plugins: ['ideal-image'],
  presets: [
    [
      'classic',
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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
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
    /*announcementBar: {
      id: null,
      //id: 'announcementBar-3', // Increment on change
      //content: `Newly launched site. Please check back often for updates 😁`,
    },*/
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