import {SimpleGrid, Box, Button, Heading, Text} from '@chakra-ui/react';
export const CardList = props =>{
  const {cards = []} = props;
  return(
    <SimpleGrid>
      {
        cards.map(card=>(
          <Box key = {card.title}>
            <Heading as = "h3">
              {card.title}
            </Heading>
            <Text>
              {card.body}
            </Text>
            <Button as = "a">
              Read more
            </Button>
          </Box>
          )
        )
      }
    </SimpleGrid>
  )
}