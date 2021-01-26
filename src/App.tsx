import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@material-ui/core';
import {theme} from './theme';
import './assets/style/main.scss';

const Title: React.FC = () => <h1>Hello</h1>;

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="xl" style={{padding: 40}}>
      <Title />
    </Container>
  </ThemeProvider>
);

export default App;
