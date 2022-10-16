import React from 'react'
import { Button, Stack } from '@mui/material'

import { categories } from '../utils/constanst'

const Sidebar = ({setselectedCategory, selectedCategory}) => {
  return (
    <Stack direction='row' className='overflow-y-auto h-auto md:h-[95%] md:w-56 md:flex-col'>
      {
        categories.map((category) =>
        <Button onClick={() => setselectedCategory(category.name)} key={category.name} className='flex items-center text-center justify-start cursor-pointer bg-transparent outline-none border-none rounded-3xl hover:bg-[#FC1503] hover:text-white px-2 py-3 my-1 mx-0 '
        style = {{background: category.name === selectedCategory && '#FC1503'}}>
          <span >{category.icon}</span>
          <span className = 'ml-2 text-gray-100'>{category.name}</span>
        </Button>
        )
      }
    </Stack>
  )
}

export default Sidebar