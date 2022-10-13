import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from '../components'

import { fetchapi } from '../utils/fetchapi'
const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  // It is a life cycle hook which gets called when a component is initially loads
  // The dependency array is left empty, code runs when page is reloaded
  useEffect(() => {
    // pass remainder of the url to be called . q is query 
    // .then return a promise
    fetchapi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>(setVideos(data.items)))
  }, [selectedCategory])
  
  return (
    <Stack className='flex-col md:flex-row '>
      {/* Will Wrap the sidebar*/}
      <Box className='h-auto md:h-[90vh] border-r-1 p-1'>
        {/* SIDEBAR */}
        <Sidebar selectedCategory = {selectedCategory} setselectedCategory = {setselectedCategory}/>
        <Typography className='text-gray-100 text-sm '>
          &copy;{new Date().getFullYear()}
          <span> &nbsp;SoftOps Inc.&nbsp; All rights reserved.</span>
        </Typography>
      </Box>
      {/* This will wrap the video feed section */}
      <Box p={2} className='overflow-y-auto h-[90vh] flex'>
        <Typography variant='h4' fontWeight='bold' mb={2} className = 'text-gray-100'>
         <span>{selectedCategory}</span><span className='text-[#FC1503]'>Videos</span>
        </Typography>

        <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
