import React, { Fragment } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Box } from "grommet"
import config from "../config"

import App from "../components/layout"
import Section from "../components/section"
import Posts from "../components/posts"
import { flatten } from "../tools"
import Seo from "../components/seo"

{/* FIXED: take SEO title from config.js */}
function PhotosArchive({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Photography articles - ${config.title}`,
            path: `/photos/`,
          },
        }}
      />
      <App title="Photography articles">
        <Section justifyInner="start">
          <Posts posts={flatten(posts)} limit={false} />
        </Section>
      </App>
    </Fragment>
  )
}

PhotosArchive.propTypes = {
  data: PropTypes.shape().isRequired,
}

{/* FIXED use me.jpg instead of up.jpg */}
{/* FIXED use GatsbyImageSharpFluid_withWebp */}
export const pageQuery = graphql`
  query PhotoQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "photo" } } }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            type
            country
            cover {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PhotosArchive
