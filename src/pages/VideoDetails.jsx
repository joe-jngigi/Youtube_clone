import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { Typography, Stack, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from '../components'
import { fetchapi } from '../utils/fetchapi'

const VideoDetails = () => {

  const {id} = useParams()

  const [VideoDetails, setVideoDetails] = useState(null)
   const [videos, setVideos] = useState([])

  // Destructuring objects
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = VideoDetails

  useEffect(() => {
    fetchapi(`videos?.part=snippet,statistics&id=${id}`)
    .then((data) =>setVideoDetails(data?.items[0])) 

    fetchapi(`videos?.part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) =>setVideos(data?.items[0])) 

  }, [id])
  
  return (
    <Box className='min-h-full'>
      <Stack className='flex flex-col md:row '>
        <Box className='grid grid-cols-[1fr 25%]'>
          <Box className='sticky w-full top-20'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className = 'react-player' controls/>
            <Typography variant='h5' className='text-gray-100 font-semibold'>
              {title}
            </Typography>
            <Stack className='flex flex-row justify-between text-gray-200'>
              <Link to = {`/channel/${channelId}`}>
              <Typography variant='h6'>
                {channelTitle}
                <CheckCircle className='font-semibold ml-1 text-gray-200'/>
              </Typography>
              </Link>
              <Stack className='flex gap-5'>
                <Typography variant='body1'>
                {parseInt(viewCount).toLocaleString} Views
                
              </Typography>
              <Typography variant='body1'>
                 {parseInt(likeCount).toLocaleString} Likes
              </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box className='flex justify-center items-center'>
        <Videos videos={videos}/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
