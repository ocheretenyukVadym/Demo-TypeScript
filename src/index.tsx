import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { RootStateProvider } from './Components/Store/RootStateContext';

ReactDOM.render(
  <BrowserRouter>
    <Route>
      <RootStateProvider >
        <App />
      </RootStateProvider>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();