import uuid from 'uuid';
import moment from 'moment';
import axios from 'axios';

import { createStore, compose, combineReducers } from 'redux';

console.log('Starting redux example');

let store = null;

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

const changeSearch = data => ({
  type: 'CHANGE_SEARCH',
  data
});


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

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});


// Map reducer
const mapReducer = function (state = {
  isFetching: false,
  url: undefined
}, action) {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

const startLocationFetch = () => ({
  type: 'START_LOCATION_FETCH'
});

const completeLocationFetch = url => ({
  type: 'COMPLETE_LOCATION_FETCH',
  url
});



const reducer = combineReducers({
  search: searchReducer,
  todoList: todoListReducer,
  map: mapReducer
});


store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('redux').innerHTML = state.searchText;
  if (state.map.isFetching) {
    document.getElementById('map').innerHTML = 'Loading';
  } else if(state.map.url) {
    document.getElementById('map').innerHTML = `<a href="${state.map.url}">View your location</a>`;
  }
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

const fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io')
    .then((res) => {
      const loc = res.data.loc;
      const baseURL = `http://maps.google.com?q=${loc}`;
      store.dispatch(completeLocationFetch(baseURL));
    });
};

fetchLocation();

module.exports = {
  todoAppState: store.getState()
};

