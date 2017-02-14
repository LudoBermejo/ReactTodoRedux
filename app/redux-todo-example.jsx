import uuid from 'uuid';
import moment from 'moment';

import { createStore, compose, combineReducers } from 'redux';

console.log('Starting redux example');

const defaultSearchState = {
  searchText: '',
  filterByComplete: false
};

const searchReducer = function (state = defaultSearchState, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText,
        filterByComplete: action.filterByComplete
      };
    default: return state;
  }
};

const todoListReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'REMOVE_TODO':
      return state.filter(b => b.id !== action.id);
    default: return state;
  }
};


const reducer = combineReducers({
  search: searchReducer,
  todoList: todoListReducer
});

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('redux').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text',
  filterByComplete: false
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text2',
  filterByComplete: false
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text3',
  filterByComplete: true
});

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    value: 'First element',
    completed: false,
    createdAt: moment().unix()
  }
});

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: uuid(),
    value: 'Second element',
    completed: false,
    createdAt: moment().unix()
  }
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: store.getState().todoList[0].id
});

module.exports = {
  todoAppState: store.getState()
};

