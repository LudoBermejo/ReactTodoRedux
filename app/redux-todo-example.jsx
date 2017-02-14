import { createStore } from 'redux';

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

    default: return state;
  }
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'My text'
});

module.exports = {
  todoAppState: store.getState()
};

console.log(store.getState());