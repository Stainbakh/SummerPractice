import { SimpleGrid, Box, Button, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react'
export const CardList = props =>{
  const {cards = []} = props;
  return(
    <Box minW = '560'>
      <Heading id = "Projects" fontSize = "6xl" py = "10">
        My projects
      </Heading>
    <SimpleGrid columns = {[1, null, 2, 3]} spacing = {[4, null, 6,]}>
      {
        cards.map(card=>(
          <Stack key = {card.title} spacing = {3} _hover={{shadow:'md'}} p={2}>
            <Heading fontSize = "3xl" fontWeight="bold" >
              {card.title}
            </Heading>
            <Text fontSize = "xl" noOfLines={4}>
              {card.body}
            </Text>
            <Button as = "a" href = {card.project_ref} colorScheme="brand">
              To project
            </Button>
          </Stack>
          )
        )
      }
    </SimpleGrid>
  </Box>
  )
}