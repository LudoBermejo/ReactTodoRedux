import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import * as reduxReducers from 'reducers';

const reducer = combineReducers({
  searchReducer: reduxReducers.searchReducer,
  showCompleteReducer: reduxReducers.showCompleteReducer,
  todoList: reduxReducers.todoListReducer
});

const store = createStore(reducer, compose(
  applyMiddleware(ReduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


export default store;

