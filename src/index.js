import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme'
import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
