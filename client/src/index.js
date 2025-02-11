import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./store/index";

import axios from 'axios';

import * as serviceWorker from './serviceWorker';

import App from './components/App';

import './index.css';

// Axios global defaults config
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
