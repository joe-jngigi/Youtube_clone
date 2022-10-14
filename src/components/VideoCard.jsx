import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constanst'

const VideoCard = ({video: {id: {videoId},snippet }}) => {
  console.log(videoId, snippet)
  return (
    <Card className=''>
      <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image = {snippet?.thumbnails?.high?.url} alt = {snippet?.title} className = 'w-full h-44'/>
      </Link>

      <CardContent className='bg-main-dark-bg h-24'>
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' className='font-bold text-gray-200'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to = {snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' className='font-bold text-gray-400'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle className='font-semibold ml-1 text-gray-400'/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard