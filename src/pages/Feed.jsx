import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from '../components'
const Feed = () => {
  return (
    <Stack className='flex-col md:flex-row '>
      {/* Will Wrap the sidebar and the other one */}
      <Box className='h-auto md:h-[90vh] border-gray-400 border-1 border-solid p-1'>
        {/* SIDEBAR */}
        <Sidebar/>
        <Typography>
          &copy;{new Date().getFullYear()}
        <span> &nbsp;SoftOps Inc.&nbsp; All rights reserved.</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
