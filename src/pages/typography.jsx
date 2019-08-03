import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box } from "grommet"

import Section from "../components/section"
import Seo from "../components/seo"
import App from "../components/layout"
import { renderAst } from "../tools"

function Typography({ data }) {
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Typography - Jochen On Tour blog`,
            path: `/about/typography`,
          },
        }}
      />
      <App title="Typography">
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
export const pageQuery = graphql`
  query TypographyQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/about/typography" } }) {
      htmlAst
      frontmatter {
        path
      }
    }
  }
`

Typography.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Typography
