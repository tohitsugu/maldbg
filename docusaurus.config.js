/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'MalDbg',
  tagline: 'Exploring malicious code and malware',
  organizationName: 'maldbg',
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
        docs: false,
        pages: false,
        blog: {
          routeBasePath: '/',
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
      appId: 'X1Z85QJPUV',
      apiKey: 'bf7211c161e8205da2f933a02534105a',
      indexName: 'docusaurus-2',
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'MalDbg',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
    },
  },
};