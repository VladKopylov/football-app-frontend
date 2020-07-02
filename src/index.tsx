import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { App } from './App';
import { GlobalStyles } from './GlobalStyles';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <GlobalStyles />
    <App />
  </Router>,
  document.querySelector('#root'),
);
