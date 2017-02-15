import React from 'react';
import ReactDOM from 'react-dom';
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
