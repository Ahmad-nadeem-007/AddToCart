import React from 'react';
import thunk from "redux-thunk";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore , applyMiddleware,
  compose,} from 'redux';
import { Provider } from 'react-redux';
import rootRducer from './Services/reducers/index'
// import store from './store'
const initialState = {};

const middlewares = [thunk];

 const store = legacy_createStore(rootRducer,initialState,
  compose(applyMiddleware(...middlewares)))


const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn('stor data',store)
root.render(
    <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
