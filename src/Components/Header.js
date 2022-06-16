import { Image, Container, Flex, Box, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher} from '../ColorModeSwitcher';
import Logo from '../logo.svg'

const Header = () => {
  const {colorMode} = useColorMode();
  return(

    <Box as = "header" py = {4} bg = {colorMode === 'dark' ? 'gray.600' : 'green.200'}>
      <Container maxW = "container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image
            src={Logo}
            alt ="logo"
            boxSize = "100px"
            objectFit="cover"
          />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}
export {Header}
