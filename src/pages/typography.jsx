import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box, Heading } from "grommet"
import styled from "styled-components"
import config from "../config"

import Section from "../components/section"
import Seo from "../components/seo"
import App from "../components/layout"
import { renderAst } from "../tools"

const Toc = styled.div`
  word-wrap: break-word;

  ul {
    margin: 0;
    list-style-type: none;
    padding-left: 1em;
  }

  li {
    padding: 2px;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
`

{/* FIXED: take SEO title from config.js */}
function Typography({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { tableOfContents } = markdownRemark

  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Typography - ${config.title}`,
            path: `/typography`,
          },
        }}
      />
      <App title="Typography">
        <Section>
        <Box
          width="xxlarge"
          justify="around"
          direction="row-responsive"
          pad="small"
          alignSelf="center"
          margin="small"
        >
          <Box
            pad="medium"
            align="center"
            elevation="medium"
            margin="small"
          >
            {renderAst(data.markdownRemark.htmlAst)}
          </Box>
          <Box
            width="large"
            elevation="small"
            pad="large"
            margin="small"
          >
            <Heading level="4" border="5">Contents</Heading>
            <Toc
              margin="xsmall"
              border="1"
              dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </Box>
        </Box>
        </Section>
      </App>
    </Fragment>
  )
}

{/* FIXED use me.jpg instead of up.jpg */}
{/* FIXED use GatsbyImageSharpFluid_withWebp */}
export const pageQuery = graphql`
  query TypographyQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/typography" } }) {
      htmlAst
      frontmatter {
        path
      }
      tableOfContents(pathToSlugField: "frontmatter.path")

    }
  }
`

Typography.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Typography
