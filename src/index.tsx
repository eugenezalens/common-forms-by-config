import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import store from 'store/store';
import Styled from 'modules/common/assets/styles/DefaultStyles';

// eslint-disable-next-line
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Styled.DefaultStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
