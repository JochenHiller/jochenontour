import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box } from "grommet"
import config from "../config"

import Section from "../components/section"
import Seo from "../components/seo"
import App from "../components/layout"
import { renderAst } from "../tools"

{/* FIXED: replace SEO title with config.title */}
function Licenses({ data }) {
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Licenses - ${config.title}`,
            path: `/about/licenses`,
          },
        }}
      />
      <App title="Licenses">
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
  query LicensesQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/about/licenses" } }) {
      htmlAst
      frontmatter {
        path
      }
    }
  }
`

Licenses.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Licenses
