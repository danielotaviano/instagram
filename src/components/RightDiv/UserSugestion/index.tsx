import React from 'react';
import { Container, UserInfo, UserContent, Follow } from './styles';

const UserSugestion: React.FC = () => {
  return (
    <Container>
      <UserContent>
        <a href="/">
          <img
            src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118396326_800330437380517_6227925825721917897_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=e3RkkP5vZqwAX-9dXWh&oh=f3eb9b95b429ca9335c53cf6d99d181f&oe=5F856746"
            alt="Neymar Jr"
          />
        </a>
        <UserInfo>
          <a href="/">
            <h1>neymarjr</h1>
          </a>
          <span>Follows you</span>
        </UserInfo>
      </UserContent>
      <Follow>Seguir</Follow>
    </Container>
  );
};

export default UserSugestion;
