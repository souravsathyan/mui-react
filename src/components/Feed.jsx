import React from 'react'
import {Box} from "@mui/material"
import Posts from './Posts'

const Feed = () => {
  return (
    <Box bgcolor={'lightgray'} p={2} flex={4}>
      <Posts></Posts>
    </Box>
  )
}

export default Feed