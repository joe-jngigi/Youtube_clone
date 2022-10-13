import React from 'react'
import { Stack, Box } from '@mui/material';
import{ VideoCard, Channel }from './';
const Videos = ({videos}) => {
    console.log(videos);
  return (
    <Stack direction='row' className='flex-wrap justify-start gap-5'>
        {
            videos.map((item, index) =>(
                <Box key={index} >
                    {item.id.videoId && <VideoCard video ={item}/>}
                    {item.id.channelId && <Channel channel = {item}/>}

                </Box>
            ))
        }

    </Stack>
  )
}

export default Videos