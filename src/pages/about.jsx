import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box } from "grommet"
import config from "../config"

import Section from "../components/section"
import Seo from "../components/seo"
import App from "../components/layout"
import { renderAst } from "../tools"

{/* FIXED: take SEO title from config.js */}
function About({ data }) {
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `About this blog -  ${config.title}`,
            path: `/about/`,
          },
        }}
      />
      <App title="About this blog">
        <Section>
          <Box
            margin={{ horizontal: `xlarge`, vertical: `small` }}
            pad="medium"
            align="center"
            elevation="medium"
          >
            {renderAst(data.markdownRemark.htmlAst)}
          </Box>
        </Section>
      </App>
    </Fragment>
  )
}

{/* FIXED use me.jpg instead of up.jpg */}
{/* FIXED use GatsbyImageSharpFluid_withWebp */}
export const pageQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      htmlAst
      frontmatter {
        path
      }
    }
  }
`

About.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default About
