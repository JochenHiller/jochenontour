import React from "react"
import { Box, Anchor, Text } from "grommet"
import {
  Twitter,
  MailOption,
  Instagram,
  Github,
  Facebook,
  Rss,
} from "grommet-icons"

import config from "../config"

const Footer = () => (
  <Box background="dark-2" fill="horizontal" pad={{ horizontal: `small` }}>
    <Box
      alignSelf="center"
      width="xxlarge"
      margin={{ horizontal: `medium`, vertical: `xxsmall` }}
    >
      <Box direction="row" gap="xxsmall">
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Instagram"
          icon={<Instagram color="accent-3" />}
          href={`https://instagram.com/${config.instagram}/`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Twitter"
          icon={<Twitter color="accent-3" />}
          href={`https://twitter.com/${config.twitter}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Facebook"
          icon={<Facebook color="accent-3" />}
          href={`https://facebook.com/${config.facebook}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Email"
          icon={<MailOption color="accent-3" />}
          href={`mailto:${config.email}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Github"
          icon={<Github color="accent-3" />}
          href={`https://github.com/${config.github}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="RSS"
          icon={<Rss color="accent-3" />}
          href="/rss.xml"
        />
      </Box>
      <Box direction="row" gap="small">
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="Impressum"
          href="/impressum"
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="Lizenzen"
          href="/licenses"
        />
      </Box>
    </Box>
  </Box>
)

export default Footer
