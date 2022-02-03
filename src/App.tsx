import React from 'react';
import logo from './logo.svg';
import client from './api/clients/apollo';
import './App.css';
import WMCPApp from './wmcpApp';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { ApolloProvider } from 'react-apollo';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
const theme = createTheme();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <WMCPApp />
          </ApolloProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
