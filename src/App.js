import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './views/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <div className="App">
          <HomePage />
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
