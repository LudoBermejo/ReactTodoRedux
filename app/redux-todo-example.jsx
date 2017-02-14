import {createStore} from 'redux';

console.log('Starting redux example');

const defaultState = {
  searchText: '',
  filterByComplete: false,
  todoList: []
};

const store = createStore((state = defaultState, action) => {
  return state;
});

module.exports = {
  todoAppState: store.getState()
};
