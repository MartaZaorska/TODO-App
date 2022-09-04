import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { AppThemeProvider } from './context/ThemeContext';
import store from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppThemeProvider>
  </React.StrictMode>
);
