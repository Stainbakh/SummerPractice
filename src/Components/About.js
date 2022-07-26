import {
  Container,
  extendTheme,
  Flex,
  Heading,
  Hide,
  Image,
  Show,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react'

export const About = () =>{
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
 const  fontWeights = {
   hairline: 100,
   thin: 200,
   light: 300,
   normal: 400,
   medium: 500,
   semibold: 600,
   bold: 700,
   extrabold: 800,
   black: 900,
 }
 const fontSizes = {
   xs: "0.75rem",
   sm: "0.875rem",
   md: "1rem",
   lg: "1.125rem",
   xl: "1.25rem",
   "2xl": "1.5rem",
   "3xl": "1.875rem",
   "4xl": "2.25rem",
   "5xl": "3rem",
   "6xl": "3.75rem",
   "7xl": "4.5rem",
   "8xl": "6rem",
   "9xl": "8rem",
 }

  const align = useBreakpointValue({ base: 'center', sm: 'start' })
  const weigth = useBreakpointValue({base: 'bold', sm: 'semibold'})
  const size = useBreakpointValue({base: "1.9rem", sm: "1.75rem"})
  const centre = useBreakpointValue({base:  1, sm: 0})
  const theme = extendTheme({ breakpoints, fontSizes, fontWeights, centre})
  return(
    <Container  centerContent = {centre} minW = '560' maxW="container.lg">
      <Heading id = "About" fontSize= "6xl" py = "4">
        About me
      </Heading>
      <Show below = '767px'>
        <Container centerContent>
        <Image
          py = '1.5'
          align='center'
          borderRadius='full'
          boxSize='400px'
          src='drinking.gif'
          alt='Logo'
        />
        </Container>
      </Show>
      <Flex   py="3" >
        <Text theme = {theme} align = {align} fontSize = {size} fontWeight = {weigth} zIndex= '-1' >
          Hello, I'm Ivan, a second year student of MTUCI and a beginner front-end developer. <br/> My favourite joke: <br/>
          Three Tomatoes A family of three tomatoes were walking downtown one day when the little baby tomato started lagging behind.
          The big father tomato walks back to the baby tomato, stomps on her, squashing her into a red paste, and says, "Ketchup!"
        </Text>
        <Show above = '768px'>
        <Image
          px='7'
          borderRadius='full'
          boxSize='400px'
          src='drinking.gif'
          alt='Logo'
          zIndex= "0"
        />
        </Show>
      </Flex>
      <Hide below = "767px">
      <Flex justifyContent="space-between" alignItems="baseline">
      <Text fontSize = "lg" as = "cite" p="1">
        Eyes of gray—the sodden quay,
        <br/>
        Driving rain and falling tears,
        <br/>
        As the steamer heads to sea
        <br/>
        In a parting storm of cheers.
        <br/>
        Sing, for Faith and Hope are high.
        <br/>
        None so true as you and I—
        <br/>
        Sing the Lovers’ Litany:—
        <br/>
        «Love like ours can never die!»
        </Text>
      <Text fontSize = "lg" as = "cite" p="3">
        Eyes of black—the throbbing keel
        <br/>
        Milky foam to left and right;
        <br/>
        Little whispers near the wheel
        <br/>
        In the brilliant tropic night.
        <br/>
        Cross that rules the Southern Sky,
        <br/>
        Stars that sweep, and wheel, and fly,
        <br/>
        Hear the Lovers’ Litany:—
        <br/>
        «Love like ours can never die!»
        <br/>
      </Text>
      <Text fontSize = "lg" as = "cite" p="3">
        Eyes of brown—the dusty plain
        <br/>
        Split and parched with heat of June.
        <br/>
        Flying hoof and tightened rein,
        <br/>
        Hearts that beat the old, old tune.
        <br/>
        Side by side the horses fly,
        <br/>
        Frame we now the old reply
        <br/>
        Of the Lovers’ Litany:—
        <br/>
        «Love like ours can never die!»
        <br/>
      </Text>
      <Text fontSize = "lg" as = "cite" p="3">
        Eyes of blue—the Simla Hills
        <br/>
        Silvered with the moonlight hoar;
        <br/>
        Pleading of the waltz that thrills,
        <br/>
        Dies and echoes round Benmore.
        <br/>
        «Mabel,» «Officers,» «Good-bye,»
        <br/>
        Glamour, wine, and witchery—
        <br/>
        On my soul’s sincerity,
        <br/>
        «Love like ours can never die!»
        <br/>
        </Text>
      <Text fontSize = "lg" as = "cite" p="3">
        Pity my most luckless state.
        <br/>
        Four times Cupid’s debtor I—
        <br/>
        Bankrupt in quadruplicate.
        <br/>
        Yet, despite this evil case,
        <br/>
        And a maiden showed me grace,
        <br/>
        Four-and-forty times would I
        <br/>
        Sing the Lovers’ Litany:—
        <br/>
        «Love like ours can never die!»
        <br/>
      </Text>
      </Flex>
      </Hide>
    </Container>
  )
}