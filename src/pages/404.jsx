import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import { Box } from "grommet"
import App from "../components/layout"

const NotFoundPage = () => (
  <App title="About this blog">
  <Section>
    <Box
      margin={{ horizontal: `xlarge`, vertical: `small` }}
      pad="medium"
      align="center"
      elevation="medium"
    >
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Box>
  </Section>
</App>
)

export default NotFoundPage
