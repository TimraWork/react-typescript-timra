import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@material-ui/core';
import {theme} from './theme';
import './assets/style/main.scss';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

const Title: React.FC = () => <h1>Привет</h1>;

const App: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container maxWidth="xl" style={{padding: 40}}>
      <Title />
      {children}
    </Container>
    <Footer />
  </ThemeProvider>
);

export default App;
