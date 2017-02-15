import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import TodoApp from 'TodoApp';
import store from 'reduxStore';


// Load foundation
$(document).foundation();

// App CSS
import 'AppStyles';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
