import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import ScrollToTop from './components/ScrollToTop.jsx';
import { Provider } from "react-redux";
import store from "./store/store.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>
  </Provider>
);