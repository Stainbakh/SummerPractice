import React from 'react';
import {
  ChakraProvider,
  Container,
  extendTheme, Spacer,
} from '@chakra-ui/react';

import { Header } from './Components/Header'
import { CardList } from './Components/CardList'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
const  posts = [
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab111.ipynb",
      "userId": 1,
      "id": 1,
      "title": "First SIAOD lab",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab2.ipynb",
      "userId": 1,
      "id": 2,
      "title": "Second SIAOD lab",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab3.ipynb",
      "userId": 1,
      "id": 3,
      "title": "Third SIAOD lab",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab4.ipynb",
      "userId": 1,
      "id": 4,
      "title": "Fourth SIAOD lab",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab5.ipynb",
      "userId": 1,
      "id": 5,
      "title": "Fifth SIAOD lab",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "project_ref": "https://github.com/Stainbakh/MTUCI-SIAOD/blob/main/Lab/Lab6.ipynb",
      "userId": 1,
      "id": 6,
      "title": "Sixth SIAOD lab",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
]


const theme = extendTheme({

  colors: {
    brand: {
      100: '#ab47bc',
      200: '#ab47bc',
      300: '#ab47bc',
      400: '#ce93d8',
      500: '#ce93d8',
      600: '#ce93d8',
    }
  }

});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Contact />
      <Container maxW="container.lg">

        <CardList cards={posts} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
