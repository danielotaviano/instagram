import React from 'react';

import { FaSearch } from 'react-icons/fa';

import { Container, Content, LeftSide, Center, RightSide } from './styles';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as LogoInstagram } from '../../assets/logo.svg';
import { ReactComponent as HearthInstagram } from '../../assets/icons/hearth.svg';
import { ReactComponent as SendInstagram } from '../../assets/icons/send.svg';
import { ReactComponent as CompassInstagram } from '../../assets/icons/compass.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <LogoInstagram />
        </LeftSide>
        <Center>
          <span>
            <FaSearch size={10} />
          </span>
          <span>Pesquisar</span>
        </Center>
        <RightSide>
          <a href="/">
            <HomeIcon />
          </a>

          <a href="/">
            <SendInstagram />
          </a>
          <a href="/">
            <CompassInstagram />
          </a>
          <a href="/">
            <HearthInstagram />
          </a>
          <a href="/">
            <img
              src="http://www.github.com/danielotaviano.png"
              alt="Daniel Otaviano"
            />
          </a>
        </RightSide>
      </Content>
    </Container>
  );
};

export default Header;
