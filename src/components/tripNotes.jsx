import React from "react"
import PropTypes from "prop-types"
import { Box, Text, Heading } from "grommet"
import { Car, Map, Schedule } from "grommet-icons"

const Note = ({ text, icon: Icon }) => (
  <Box gap="small" direction="row-responsive" align="center">
    <Icon size="medium" />
    <Text color="dark-3">{text}</Text>
  </Box>
)

function TripNotes({ km, duration, itinerary }) {
  return (
    <Box margin="medium" pad={{ horizontal: `small` }} elevation="small">
      <Heading level="4">Trip details</Heading>
      <Box gap="small" pad="small">
        {km != null ? (
          <Note text={`${km} km`} icon={Car} />
        ) : (
          <Note text={``} icon={Car} />
        )}
        {/* TODO only day when duration == 1 */}
        {duration != null ? (
          <Note text={`${duration} days`} icon={Schedule} />
        ) : (
          <Note text={``} icon={Schedule} />
        )}
        {itinerary != null ? (
          <Note text={`${itinerary.join(` -> `)}`} icon={Map} />
        ) : (
          <Note text={``} icon={Map} />
        )}
      </Box>
    </Box>
  )
}

TripNotes.propTypes = {
  duration: PropTypes.number.isRequired,
  km: PropTypes.number.isRequired,
  itinerary: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TripNotes
