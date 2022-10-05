module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  siteMetadata: {
    title: `Szkoła Muzyczna w Bartoszycach`,
    description: `Tu będzie jakiś opis szkoły...`,
    address: `ul. Olsztyńska 20/5, Bartoszyce`,
    siteUrl: `https://google.com`,
    email: 'sm@bartoszyce.org',
    author: `Jacek Michalski`
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
              family: 'Readex Pro',
              variants: ["400", "500", "600", "700"],
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
            {
              family: 'Signika',
              variants: ["400", "500", "700"],
              subsets: ["latin", "latin-ext"]
            },
          ],
        },
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
        name: `gallery`,
        path: `${__dirname}/src/assets/gallery`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    
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
        name: `news`,
        path: `${__dirname}/src/data/news`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/data/news`,
      },
    },
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
