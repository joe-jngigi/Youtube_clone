import React from 'react'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'

import { Link } from 'react-router-dom'
import { logo } from '../utils/constanst'
import { SearchBar } from '.'

const Navabar = () =>  (
    <Stack direction = 'row' p={2} alignItems = 'center' className='justify-between sticky bg-black top-0'>

      <Link to = '/' className='text-white flex items-center'>
      <img src={logo} alt="logo" className='h-11' />
      </Link>

      <SearchBar/>
    </Stack>
  )


export default Navabar