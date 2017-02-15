import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from 'TodoApp';
import * as ReduxStore from 'reduxStore';
import * as ReduxActions from 'actions';

import TodoAPI from 'TodoAPI';

// Load foundation
$(document).foundation();

// App CSS
import 'AppStyles';

const store = ReduxStore.configure();

store.dispatch(ReduxActions.addTodos(TodoAPI.getTodos()));


store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setTodos(state.todoList);
});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);

import './playground/firebase/index';