import uuid from 'uuid';
import moment from 'moment';

import { createStore, compose, combineReducers } from 'redux';

console.log('Starting redux example');

// Reducers
const defaultSearchState = {
  searchText: '',
  filterByComplete: false
};

const searchReducer = function (state = defaultSearchState, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return {
        ...state,
        ...action.data
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

// Action generators
const changeSearch = data => ({
  type: 'CHANGE_SEARCH',
  data
});

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});


// Subscribe to changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('redux').innerHTML = state.searchText;
});

store.dispatch(changeSearch({
  searchText: 'My text',
  filterByComplete: false
}));

store.dispatch(changeSearch({
  searchText: 'My text2',
  filterByComplete: false
}));

store.dispatch(changeSearch({
  searchText: 'My text3',
  filterByComplete: false
}));

store.dispatch(addTodo({
    id: uuid(),
    value: 'First element',
    completed: false,
    createdAt: moment().unix()
}));

store.dispatch(addTodo({
  id: uuid(),
  value: 'Second element',
  completed: false,
  createdAt: moment().unix()
}));

store.dispatch(removeTodo(store.getState().todoList[0].id));


module.exports = {
  todoAppState: store.getState()
};

