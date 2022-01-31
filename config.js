const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://docs.clickmcr.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://uploads-ssl.webflow.com/5f8d922f210b272a92ab5553/5faa711a59f4a292a96ae89f_logo%402x.png',
    logoLink: 'https://docs.clickmcr.com',
    title: '',
    githubUrl: 'https://github.com/clickmcr/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: '(Insert Socialz)', 
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [
      { text: 'Slack', link: 'https://shift-click.slack.com' },
      { text: 'Our FreeCodeCamp', link: 'https://freecodecamp.clickmcr.com' }
    ],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Click MCR Programme Guide',
    description: 'Free and online digital skills training, for young people looking to get started in the digital industry.',
    ogImage: null,
    docsLocation: 'https://github.com/clickmcr/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'ClickMCR Documentation',
      short_name: 'clickmcr-docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
