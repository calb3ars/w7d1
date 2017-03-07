import React from 'react';
import ReactDOM from 'react-dom';
import { allTodos, allSteps } from './reducers/selectors.js';
import Root from './components/root';
import configureStore from './store/store.js';

let store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={ store } />, rootEl);
})

window.store = store;
