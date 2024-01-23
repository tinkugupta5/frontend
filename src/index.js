import "bulma/css/bulma.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
// In your JavaScript file (e.g., app.js)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

