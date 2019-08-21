import React, { Component, Fragment, useState, useContext } from "react"
import _ from "lodash"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { Box, Heading, Anchor, Text } from "grommet"
import { MapLocation, Car, Globe, Schedule } from "grommet-icons"
import { ResponsiveContext } from "grommet"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import config from "../config"

import App from "../components/layout"
import Posts from "../components/posts"
import Map from "../components/map"
import Section from "../components/section"
import Seo from "../components/seo"
import { flatten, groupBy, coordinates, calculateTotals } from "../tools"

const Stat = ({ title, icon: Icon, counter }) => (
  <Box margin="none" align="center">
    <Icon size="xlarge" />
    <Heading level="4">{title}</Heading>
    {counter}
  </Box>
)

const Sensor = ({ onChange, children }) => {
  const size = useContext(ResponsiveContext)
  if (size === `small`) {
    return null
  }
  // TODO improve this to be more modular
  // Receive an object with the info and recreate the stats etc
  return (
    <VisibilitySensor
      onChange={e => onChange(e)}
      offset={{ top: 10 }}
      delayedCall
    >
      {children}
    </VisibilitySensor>
  )
}

const Index = ({ data }) => {
  const [didViewCountUp, setViewCountUp] = useState(false)
  const { edges: posts } = data.allMarkdownRemark
  const nodes = flatten(posts)
  const { [true]: featured, [null]: latest } = groupBy(nodes, `featured`)
  const coords = coordinates(nodes)
  const totals = calculateTotals(nodes)
  const countries = _.uniq(nodes.map(post => post.frontmatter.country)).length

  return (
    <>
      <Seo postImage={data.file.childImageSharp.fluid.src} />
      <App>
        <Section title="Featured articles">
          <Posts posts={featured} />
        </Section>
        <Sensor onChange={setViewCountUp}>
          <Section
            size={useContext(ResponsiveContext)}
            title="Meine Reisen in Zahlen"
            background="light-4"
          >
            <Box
              justify="between"
              width="xxlarge"
              direction="row-responsive"
              pad={{ horizontal: `xlarge`, vertical: `small` }}
            >
              <Stat
                icon={Car}
                title="Distance covered"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.km : 0}
                    suffix=" km"
                  />
                }
              />
              <Stat
                icon={Schedule}
                title="Duration"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.duration : 0}
                    suffix=" days"
                  />
                }
              />
              <Stat
                icon={Globe}
                title="Countries"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? countries : 0}
                  />
                }
              />
              <Stat
                icon={MapLocation}
                title="Destinations"
                counter={
                  <CountUp
                    duration={2}
                    start={0}
                    end={didViewCountUp ? totals.stops : 0}
                    suffix=" stops"
                  />
                }
              />
            </Box>
          </Section>
        </Sensor>
        <Section title="Wo ich schon überall war !">
          <Map cities={coords} />
        </Section>
        <Section
          background="light-3"
          title=""
          pad={{ horizontal: `xlarge`, vertical: `small` }}
        >
          <Box direction="row-responsive" margin="medium">
            <Box align="center" basis="3/4">
              <Text size="large">
                {/* FIXED: take blog name from config.js */}
                <h3>Willkommen zum {config.title} !</h3>
                Dies ist meine Reiseblog den ich vor ein paar Jahren begonnen 
                habe zu schreiben. Ich wollte meiner Familie, meinen Freunden von unterwegs
                meine Eindrücke in Text, Bildern oder Videos direkt weitergeben.
                <br />
                <br />
                Ich versuche live, von unterwegs zu bloggen, wenn es geht täglich.
                Wenn es nicht klappt (wie in Lappland mangels fehlender Kommunikation
                und auch mangels fehlender Zeit/Energie) hole ich das dann später nach. 
                <br />
                <br />
                Wenn es dich interessiert, folge mir und diesem Blog und 
                gib mir Feedback ob es dir gefällt.
                <Anchor
                  onClick={() => navigate(`/about`)}
                  label=" Read more"
                  size="medium"
                  color="neutral-3"
                />
              </Text>
            </Box>
            <Box align="stretch" basis="1/4">
              <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
            </Box>
          </Box>
        </Section>
        <Section title="Latest articles">
          {/* FIXED show only when there are latest articles */}
          {latest != undefined && (
            <Posts posts={latest.slice(0, 4)} />
          )}
        </Section>
      </App>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.shape().isRequired,
}

{/* FIXED use me.jpg instead of up.jpg */}
{/* FIXED use GatsbyImageSharpFluid_withWebp */}
export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "about/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { in: ["photo", "article"] } } }
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            km
            featured
            itinerary
            duration
            coordinates {
              country
              coordinates
            }
            country
            cover {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 300, quality: 100) {
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

export default Index
