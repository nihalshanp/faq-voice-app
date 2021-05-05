import React, {useEffect, useRef, useState} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import Faq from './Components/Faq/Faq';
import alanBtn from "@alan-ai/alan-sdk-web";
import {scroller} from "react-scroll"
const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null)

useEffect(() => {
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: '23940fa1cd518889d176c4455b7164532e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'gotoFaq') {
                  scroller.scrollTo(`accordion-item${commandData.faqId}`,{
                    duration: 800,
                    delay: 0,
                    smoot: 'easeInOutQuart'
                  })
                  setIndex(commandData.faqId -1)
                }
                }
        });
    }
}, []);
  return <ChakraProvider theme={theme}>
    <NavBar/>
    <Faq index={index} setIndex={setIndex} />
  </ChakraProvider>;
};

export default App;
