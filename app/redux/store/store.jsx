import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import * as reduxReducers from 'reducers';


const configure = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: reduxReducers.searchReducer,
    showCompleted: reduxReducers.showCompleteReducer,
    todoList: reduxReducers.todoListReducer
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}

export {
  configure
}
