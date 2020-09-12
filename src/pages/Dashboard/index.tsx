import React from 'react';

import Header from '../../components/Header';
import RightDiv from '../../components/RightDiv';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';

import { Content, MainContainer, Feeds } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Content>
          <Stories />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </Content>
        <RightDiv />
      </MainContainer>
    </>
  );
};

export default Dashboard;
