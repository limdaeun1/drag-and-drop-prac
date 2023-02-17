import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import store from 'store/configureStore';

import { BrowserRouter } from 'react-router-dom';

import { Normalize } from 'styled-normalize'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <Provider store={store}>
    <BrowserRouter>
    <Normalize />
    <App />
    </BrowserRouter>
    </Provider>

);

