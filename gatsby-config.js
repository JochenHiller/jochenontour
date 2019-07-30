require(`dotenv`).config()
const config = require(`./src/config`)

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.url,
    description: config.description,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: `#00739D`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-rehype-images`,
            options: {
              tag: `rehype-image`,
              quality: 80,
              maxWidth: 2112,
              toFormat: `WEBP`,
              srcSetBreakpoints: [1056 / 4, 1056 / 2, 1056],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 100,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 600,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 300, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: config.instagram,
        access_token: process.env.IG_ACCESS_TOKEN,
        instagram_id: config.instagram_id,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.gaId,
        anonymize: true,
        respectDNT: true,
        cookieDomain: `jochenontour.blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jochen On Tour blog`,
        short_name: `JochenOnTour`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#EEEEEE`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
