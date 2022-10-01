module.exports = {
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
              subsets: ["latin"]
            },
            {
              family: 'Readex Pro',
              variants: ["400", "500", "600", "700"],
              subsets: ["latin"]
            },
            {
              family: 'Roboto',
              variants: ["400", "500", "700"],
              subsets: ["latin"]
            },
            {
              family: 'Sansita',
              variants: ["400", "700"],
              subsets: ["latin"]
            },
            {
              family: 'Signika',
              variants: ["400", "500", "700"],
              subsets: ["latin"]
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/data/gallery`,
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
