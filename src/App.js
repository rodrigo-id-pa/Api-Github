import React, { useState, useEffect } from 'react';

import Routes from './routes';

import { lightTheme, darkTheme } from './components/theme';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Routes />
        <ButtonChange onClick={toggleTheme}>mode</ButtonChange>
      </>
    </ThemeProvider>
  );
}

const ButtonChange = styled.button`
  width: 45px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background: var(--tnt);
  color: var(--wt);

  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export default App;
