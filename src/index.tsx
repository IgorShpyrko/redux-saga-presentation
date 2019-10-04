import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import App from './App';
import './index.scss';

ReactDOM.render(
  (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  ),
  document.getElementById('root'),
);
