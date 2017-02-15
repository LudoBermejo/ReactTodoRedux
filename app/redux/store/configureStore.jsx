
import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware} from 'redux';

import ReduxThunk from 'redux-thunk';

import {
  searchReducer,
  todoListReducer,
  mapReducer
} from './../reducers/index';


const reducer = combineReducers({
  search: searchReducer,
  todoList: todoListReducer,
  map: mapReducer
});


const store = createStore(reducer, compose(
  applyMiddleware(ReduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;

