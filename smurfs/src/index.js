import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import thunk
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import /* You need some sort of reducer */ './reducers';
import rootReducer from './reducers';

// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/)
// );

// thunk is a term that describes
// "a function that is returned by another function aka an inner function. Concept related to closure which I learned about way earlier in the JavaScript portion of the curriculum." "Thunks will be used in action creators so that I am able to run async operations in Redux "

// pass the applyMiddleware function into createStore as the second parameter. Then pass thunk (the function thats returned by another function as stated above...)
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
