import uuid from 'uuid';
import moment from 'moment';

import { createStore, compose } from 'redux';

console.log('Starting redux example');

const defaultState = {
  searchText: '',
  filterByComplete: false,
  todoList: []
};

const store = createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.todo
        ]
      };

    default: return state;
  }
}, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('redux').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text2'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text3'
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


module.exports = {
  todoAppState: store.getState()
};

