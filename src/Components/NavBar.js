import React from 'react'
import {Box, Flex, Heading, Spacer} from '@chakra-ui/react'
import {ColorModeSwitcher} from '../ColorModeSwitcher'

const NavBar = () => {
    return (
        <Flex align={"center"} boxShadow="base" p="2" mb="2">
            <Box p="2">
                <Heading size="lg">E-commers support</Heading>
            </Box>
            <Spacer/>
            <Box><ColorModeSwitcher/></Box>
        </Flex>
    )
}

export default NavBar
