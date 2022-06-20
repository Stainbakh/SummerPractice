import { SimpleGrid, Box, Button, Heading, Text, Stack } from '@chakra-ui/react';
export const CardList = props =>{
  const {cards = []} = props;
  return(
    <SimpleGrid columns = {[1, null, 2, 3]} spacing = {[4, null, 6,]}>
      {
        cards.map(card=>(
          <Stack key = {card.title} spacing = {2} _hover={{shadow:'md'}} p={2}>
            <Heading as = "h3">
              {card.title}
            </Heading>
            <Text>
              {card.body}
            </Text>
            <Button as = "a" colorScheme="brand">
              To project
            </Button>
          </Stack>
          )
        )
      }
    </SimpleGrid>
  )
}