import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constanst'
const Channel = ({channel}) => {
  return (
    <Box className='rounded-2xl'>
      <Link to = {`/channel/${channel?.id?.channelId}`}>
        <CardContent className='flex flex-col justify-center text-center text-gray-100'>
          <CardMedia className='h-48 w-48 rounded-full' image= {channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt = {channel?.snippet?.title} />
          <Typography>
            {channel?.snippet?.title}
            <CheckCircle className='font-semibold ml-1 text-gray-400'/>
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
            
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default Channel