import uuid from 'uuid';
import moment from 'moment';
import axios from 'axios';

import store from './redux/store/configureStore';
import {
  changeSearch,
  addTodo,
  removeTodo,
  startLocationFetch,
  completeLocationFetch
} from './redux/actions/index';

console.log('Starting redux example');

// Subscribe to changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('redux').innerHTML = state.search.searchText;
  if (state.map.isFetching) {
    document.getElementById('map').innerHTML = 'Loading';
  } else if (state.map.url) {
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

