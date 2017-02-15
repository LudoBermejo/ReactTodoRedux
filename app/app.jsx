import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import TodoApp from 'TodoApp';
import * as ReduxStore from 'reduxStore';

// Load foundation
$(document).foundation();

// App CSS
import 'AppStyles';

const store = ReduxStore.configure();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);

import * as reduxActions from 'actions';

store.subscribe(() => {
  console.log('State', store.getState());
});

store.dispatch(reduxActions.addTodo('pepe'));
store.dispatch(reduxActions.setTextSearch('p'));
store.dispatch(reduxActions.toggleShowCompleted());
