require('dotenv').config();

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
    GATSBY_EXPERIMENTAL_DEVJS_LAZY: true,
    GATSBY_EXPERIMENTAL_QUERY_CONCURRENCY: 16,
    ENABLE_GATSBY_REFRESH_ENDPOINT: true,
    //PRESERVE_FILE_DOWNLOAD_CACHE: true,
    //PARALLEL_SOURCING: false,
    //DETECT_NODE_MUTATIONS: false,
    FAST_DEV: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Szkoła Muzyczna I stopnia w Bartoszycach`,
    description: `Tu będzie jakiś opis szkoły...`,
    address: `ul. Bema 35, 11-200 Bartoszyce`,
    regon: `522379596`,
    phoneSecretary: `89 674 78 45`,
    emailSecretary: `sekretariat@sm-bartoszyce.pl`,
    directorName: `Andrzej Mierzejewski`,
    secretaryName: `Monika Szyszko`,
    phoneDirector: `798527256`,
    emailDirector: `mierzejewskiandrzej44@gmail.com`,
    author: `Jacek Michalski`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ["400", "600", "700"],
              subsets: ["latin", "latin-ext"]
            },
            {
              family: 'Roboto',
              variants: ["400", "500", "700"],
              subsets: ["latin", "latin-ext"]
            },
            {
              family: 'Sansita',
              variants: ["400", "700"],
              subsets: ["latin", "latin-ext"]
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/assets/documents`,
        ignore: [
          `**/\.*`,
          `**/*.un~`,
          `**/.DS_Store`,
          `**/.gitignore`,
          `**/.npmignore`,
          `**/.babelrc`,
          `**/yarn.lock`,
          `**/node_modules`,
          `../**/dist/**`
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/assets/news`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/assets/gallery`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teachers`,
        path: `${__dirname}/src/assets/teachers`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `avatars`,
        path: `${__dirname}/src/assets/avatars`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-remark-responsive-iframe`,
      options: {
        wrapperStyle: `margin-bottom: 1.0725rem`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/data/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/data/documents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teachers`,
        path: `${__dirname}/src/data/teachers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/data/news`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      // options: {
      //   precachePages: [`/team/`, `/gallery/*`],
      // },
    },
    /* {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/data/news`,
      },
    }, */
    /* {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, */
  ],
}
