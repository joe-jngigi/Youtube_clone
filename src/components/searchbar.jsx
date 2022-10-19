import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
const Searchbar = () => {
  const [SearchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(SearchTerm){
      navigate(`/search/${SearchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper component='form' onSubmit={() =>{handleSubmit}} className='flex flex-row bg-black border-solid  p-1 shadow-none'>
        <input type="text" className='md:w-96 outline-none pl-3 rounded-3xl placeholder:italic' placeholder='Search' value={SearchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
        <IconButton className='text-fuchsia-600' type='submit'>
          <Search/>
        </IconButton>
    </Paper>
  )
}

export default Searchbar