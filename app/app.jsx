import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// App CSS
import 'AppStyles';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);

import './redux-example';