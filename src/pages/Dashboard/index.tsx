import React from 'react';

import Header from '../../components/Header';
import Stories from '../../components/Stories';

import { MainContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Stories />
      </MainContainer>
    </>
  );
};

export default Dashboard;
