import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from '../components'
const Feed = () => {
  return (
    <Stack className='flex-col md:flex-row '>
      {/* Will Wrap the sidebar and the other one */}
      <Box className='h-auto md:h-[90vh] border-r-1 p-1'>
        {/* SIDEBAR */}
        <Sidebar/>
        <Typography className='text-gray-100 text-sm'>
          &copy;{new Date().getFullYear()}
          <span> &nbsp;SoftOps Inc.&nbsp; All rights reserved.</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
