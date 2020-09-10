import React from 'react';

import Header from './components/Header';
import GlobalStyles from './styles/global';

import {ThemeProvider} from 'styled-components'
import theme from './styles/themes'

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header />



      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
