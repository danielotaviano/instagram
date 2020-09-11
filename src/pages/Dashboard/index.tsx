import React from 'react';

import Header from '../../components/Header';
import RightDiv from '../../components/RightDiv';
import Stories from '../../components/Stories';

import { Content, MainContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Content>
          <Stories />
        </Content>
        <RightDiv />
      </MainContainer>
    </>
  );
};

export default Dashboard;
