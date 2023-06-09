require('dotenv').config();

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
    //PRESERVE_FILE_DOWNLOAD_CACHE: true,
    //PARALLEL_SOURCING: false,
    //DETECT_NODE_MUTATIONS: false,
    FAST_DEV: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Szkoła Muzyczna I stopnia w Bartoszycach`,
    description: `Szkoła oferuje naukę gry na instrumentach muzycznych oraz podstawowych zagadnień z zakresu  notacji muzycznej, rytmiki, historii muzyki i literatury muzycznej`,
    address: `ul. Bema 35, 11-200 Bartoszyce`,
    regon: `522379596`,
    phoneSecretary: `89 674 78 45`,
    emailSecretary: `sekretariat@sm.bartoszyce.pl`,
    directorName: `Andrzej Mierzejewski`,
    secretaryName: `Agata Ingielewicz`,
    phoneDirector: `798527256`,
    emailDirector: `mierzejewskiandrzej44@gmail.com`,
    author: `Jacek Michalski`,
    siteUrl: `https://szkolamuzyczna.bartoszyce.pl`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://szkolamuzyczna.bartoszyce.pl`,
        sitemap: `https://szkolamuzyczna.bartoszyce.pl/sitemap.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      // G-MFLNNV8PDT
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `G-MFLNNV8PDT`,
          `GA-TRACKING_ID`, // Google Analytics / GA
          `AW-CONVERSION_ID`, // Google Ads / Adwords / AW
          `DC-FLOODIGHT_ID`, // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: `https://szkolamuzyczna.bartoszyce.pl`, // YOUR_SELF_HOSTED_ORIGIN
        },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Szkoła Muzyczna I stopnia w Bartoszycach`,
        short_name: `SM I st. w Bartoszycach`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
       options: {
         precachePages: [
          `/team/`,
          `/gallery/`,
          `/contact/`,
          `/documents/`,
          `/index/`,
          `/parents-councel/`,
          `/plans/`,
          `/psycho-care/`,
          `/recrutation/`,
        ],
       },
    },
  ],
}
