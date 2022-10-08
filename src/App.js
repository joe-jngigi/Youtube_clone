import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';

import { ChannelDetails, Feed, SearchFeed, VideoDetails } from './pages';
import { Navabar } from './components';

const App = () => (
    <Router>
      <Box sx={{backgroundColor: '#000'}}>
        <Navabar/>
        <Routes>
          <Route path='/' exact element = {<Feed/>}/>
          <Route path='/video/:id' exact element = {<VideoDetails/>}/>
          <Route path='/channel/:id' exact element = {<ChannelDetails/>}/>
          <Route path='/search/:searchTerm' exact element = {<SearchFeed/>}/>
        </Routes>
      </Box>
    </Router>
  )
export default App
