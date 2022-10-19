import React, {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import {  Videos } from '../components'
import { useParams } from 'react-router-dom'

import { fetchapi } from '../utils/fetchapi'

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])
  // It is a life cycle hook which gets called when a component is initially loads
  // The dependency array is left empty, code runs when page is reloaded
  useEffect(() => {
    // pass remainder of the url to be called . q is query 
    // .then return a promise
    fetchapi(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>(setVideos(data.items)))
  }, [searchTerm])

   console.log(videos)
  return (
    /* This will wrap the video feed section */
    <Box p={2} className='overflow-y-auto h-[90vh] flex flex-col'>
      <Typography variant='h4' fontWeight='bold' mb={2} className = 'text-gray-100'>
        <span>Search results: </span><span className='text-[#FC1503]'>{searchTerm}</span><span> videos</span>
      </Typography>
      <Videos videos = {videos}/>
    </Box>
  )
}

export default SearchFeed