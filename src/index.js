import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StyledEngineProvider> */}
      <App />
    {/* </StyledEngineProvider> */}
  </React.StrictMode>
);

