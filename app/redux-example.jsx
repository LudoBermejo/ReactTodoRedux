import { createStore } from 'redux';

console.log('Starting redux example');

const store = createStore((state = {name: 'Anonymous'}, action) => {
  return state;
});

const currentState = store.getState();


import {todoAppState} from './redux-todo-example';
console.log(todoAppState);