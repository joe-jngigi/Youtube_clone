import React from 'react'
import { Button, Stack } from '@mui/material'

import { categories } from '../utils/constanst'

const Sidebar = () => {
  const selectedColor = 'New'
  return (
    <Stack direction='row' className='overflow-y-auto h-auto md:h-[95%] md:flex-col'>
      {
        categories.map((category) =>
        <Button className='flex items-center text-center justify-start cursor-pointer bg-transparent outline-none border-none rounded-3xl hover:bg-[#FC1503] hover:text-white px-2 py-3 my-1 mx-0'
        style = {{background: category.name === selectedColor ? '#FC1503' : 'transparent'}}>
          <span classname = 'pr-2'>{category.icon}</span>
          <span>{category.name}</span>
        </Button>
        )
      }
    </Stack>
  )
}

export default Sidebar