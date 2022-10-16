import React from 'react'
import { Stack, Box } from '@mui/material';
import{ VideoCard, Channel }from './';
const Videos = ({videos}) => {
    // console.log(videos);
  return (
    <Stack className='flex-wrap justify-start gap-5 grid sm:grid-cols-2 md:grid-cols-3'>
        <Channel />
        {
            videos.map((item, index) =>(
                <Box key={index} >
                    {item.id.channelId && <Channel channel = {item}/>}
                    {item.id.videoId && <VideoCard video ={item}/>}

                </Box>
            ))
        }

    </Stack>
  )
}

export default Videos