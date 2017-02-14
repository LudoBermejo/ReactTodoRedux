import { combineReducers, createStore, compose } from 'redux';
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
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;

