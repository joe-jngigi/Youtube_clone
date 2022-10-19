import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Channel, Videos } from '../components'
import { fetchapi } from '../utils/fetchapi'
const ChannelDetails = () => {
  const {id} = useParams()

  const [ChannelDetails, setChannelDetails] = useState(null)
  const [videos, setvideos] = useState([])
  useEffect(() => {

    fetchapi(`channels?.part=snippet&id=${id}`)
    .then((data) =>setChannelDetails(data?.items[0])) 

    fetchapi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>setvideos(data?.items)) 
  }, [id])
  
  return (
    <Box className='min-h-screen'>
      <Box>
        <div className='z-10 h-1/3 bg-emerald-500'/>
        <Channel className = 'mt-32' channel = {ChannelDetails}/>
      </Box>
      <Box className='flex gap-5'>
        <Box>
          <Videos videos = {videos}/>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetails