import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// App CSS
import 'AppStyles';

import * as reduxActions from 'actions';
import store from 'reduxStore';

store.subscribe(() => {
  console.log('State', store.getState())
})

store.dispatch(reduxActions.addTodo('pepe'))
store.dispatch(reduxActions.setTextSearch('p'))
store.dispatch(reduxActions.toggleShowCompleted())

console.log(store);
ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
