import { Container, Flex, Heading, Hide, Image, Spacer, Text } from '@chakra-ui/react';
import logo from "./MyPhoto.jpg";
import React from 'react'
export const About = () =>{

  return(
    <Container minW = '560' maxW="container.lg">
      <Heading id = "About" fontSize= "6xl" py = "10">
        About me
      </Heading>
      <Flex justifyContent="space-between"  py="0.5" >
        <Text  fontSize = "2xl" fontWeight = "semibold">
          Hello, I'm Ivan, a second year student of MTUCI and a beginner front-end developer.
        </Text>
        <Spacer />
        <Text fontSize= '2xl' fontWeight = "semibold">
          My favourite joke: <br/>
          Three Tomatoes A family of three tomatoes were walking downtown one day when the little baby tomato started lagging behind.
          The big father tomato walks back to the baby tomato, stomps on her, squashing her into a red paste, and says, "Ketchup!"
        </Text>

        <Image
          px = "5"
          borderRadius='full'
          boxSize='320px'
          src={logo}
          alt='Logo'
        />

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