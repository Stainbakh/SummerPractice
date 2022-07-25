import { Button, Container, Heading, HStack } from '@chakra-ui/react';
import {FaGithub, FaTelegramPlane } from 'react-icons/all';
import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';

export const Contact = () => {
  return(
    <Container minW = '560' maxW="container.lg">
      <Heading id = "Contact" fontSize = "6xl" py = "10">
        Contact me
      </Heading>
      <HStack>
        <Button as = "a" href = "https://github.com/Stainbakh" colorScheme='brand' leftIcon={<FaGithub />} size ="lg" >
          GitHub
        </Button>
        <Button as = "a" href = "https://t.me/shtaivs" colorScheme='brand' leftIcon={<FaTelegramPlane />} size = "lg">
          Telegram
        </Button>
        <Button as = "a" href = "https://vk.com/shtis" colorScheme='brand' leftIcon={<EmailIcon />} size = "lg">
          Vk
        </Button>
      </HStack>
    </Container>
  )
}