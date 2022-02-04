import React, { useEffect } from 'react';
import logo from './logo.svg';
import client from './api/clients/apollo';
import './App.css';
import WMCPApp from './wmcpApp';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
const theme = createTheme();

export const App = () => {
  const render = () => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <WMCPApp />
          </ApolloProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );

  if (module.hot) {
    module.hot.accept('./wmcpApp', () => {
      return render();
    });
  };
  return render()

}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;