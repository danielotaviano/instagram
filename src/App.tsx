import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import theme from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
