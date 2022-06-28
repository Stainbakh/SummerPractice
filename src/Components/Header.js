import {
  Container,
  Flex,
  Box,
  useColorMode,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SmallCloseIcon } from '@chakra-ui/icons'

const Header = () => {
  const {colorMode} = useColorMode();
  return(

    <Box as = "header" py = {1.5} bg = {colorMode === 'dark' ? 'gray.600' : 'green.300'}>
      <Container maxW = "container.lg">
        <Flex justifyContent="space-between" alignItems="center">

          <Heading size = '2xl'>
            Steinbach.
          </Heading>
          <Breadcrumb fontWeight='900' fontSize='3xl' spacing='12px' separator={<SmallCloseIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#About'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#Contact'>Contact</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#Projects'>Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}
export {Header}
