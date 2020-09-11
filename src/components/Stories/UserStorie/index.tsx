import React from 'react';

import { Container } from './styles';

interface UserStorieProps {
  image_url: string;
  name: string;
  user: string;
}

const UserStorie: React.FC<UserStorieProps> = ({ image_url, name, user }) => {
  return (
    <Container>
      <img draggable="false" src={image_url} alt={name} />
      <span>{user}</span>
    </Container>
  );
};

export default UserStorie;
