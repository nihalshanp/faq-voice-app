import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import Faq from './Components/Faq/Faq';

const App = () => {
  return <ChakraProvider theme={theme}>
    <NavBar/>
    <Faq/>
  </ChakraProvider>;
};

export default App;
