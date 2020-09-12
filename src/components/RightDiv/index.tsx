import React from 'react';

import {
  Container,
  UserContent,
  ImgContent,
  InfoContent,
  SuggestionsContent,
  UsersSugestions,
  Footer,
} from './styles';

import UserSugestion from './UserSugestion';

const RightDiv: React.FC = () => {
  return (
    <Container>
      <UserContent>
        <ImgContent>
          <img
            src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06"
            alt="Daniel Pontes"
          />
        </ImgContent>
        <InfoContent>
          <h1>danielotavs</h1>
          <span>Daniel Otaviano</span>
        </InfoContent>
      </UserContent>

      <SuggestionsContent>
        <header>
          <h1>Sugestões para você</h1>
          <span>Ver tudo</span>
        </header>
        <UsersSugestions>
          <UserSugestion />
          <UserSugestion />
          <UserSugestion />
          <UserSugestion />
          <UserSugestion />
        </UsersSugestions>
      </SuggestionsContent>
      <Footer>
        <nav>
          <ul>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Ajuda</a>
            </li>
            <li>
              <a href="/">Imprensa</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
            <li>
              <a href="/">Carreiras</a>
            </li>
            <li>
              <a href="/">Privacidade</a>
            </li>
            <li>
              <a href="/">Termos</a>
            </li>
            <li>
              <a href="/">Localizações</a>
            </li>
            <li>
              <a href="/">Contas mais relevantes</a>
            </li>
            <li>
              <a href="/">Hashtags</a>
            </li>
            <li>
              <a href="/">Idiomas</a>
            </li>
          </ul>
        </nav>

        <span>© 2020 Instagram de Daniel (@danielotavs)</span>
      </Footer>
    </Container>
  );
};

export default RightDiv;
