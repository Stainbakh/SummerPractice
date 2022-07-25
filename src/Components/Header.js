import {
  Container, Flex, Box,
  useColorMode,
  Heading,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  MenuButton, Menu, IconButton, MenuList, MenuItem, Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Show } from '@chakra-ui/react'
import React from 'react'
const Header = () => {
  const {colorMode} = useColorMode();
  return(
    <Box minW = '580' as = "header" py = {1.5} bg = {colorMode === 'dark' ? 'gray.600' : 'green.300'}>
      <Container maxW = "container.lg">
        <Flex Flex minWidth='max-content' alignItems='center' gap='2'>

          <Heading size = '2xl'>
            Steinbach.
          </Heading>
          <Spacer />
          <Show above = '768px'>
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
            <Spacer />
          </Show>

          <Show below = '767px'>
            <Menu >
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem as = "a" href='#About'>
                  About
                </MenuItem>
                <MenuItem as = "a" href='#Contact'>
                  Contact
                </MenuItem>
                <MenuItem as = "a" href='#Projects'>
                  Projects
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>

          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  )
}
export {Header}
