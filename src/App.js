import React, {useEffect, useRef} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import Faq from './Components/Faq/Faq';
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  const alanBtnInstance = useRef(null);

useEffect(() => {
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: '23940fa1cd518889d176c4455b7164532e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                        // Call the client code that will react to the received command
                    }
                }
        });
    }
}, []);
  return <ChakraProvider theme={theme}>
    <NavBar/>
    <Faq/>
  </ChakraProvider>;
};

export default App;
