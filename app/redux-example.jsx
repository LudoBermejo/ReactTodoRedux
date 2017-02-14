import { createStore } from 'redux';

console.log('Starting redux example');

const store = createStore((state = { name: 'Anonymous' }, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
  }
  return state;
});

import { todoAppState } from './redux-todo-example';

const action = {
  type: 'CHANGE_NAME',
  name: 'Ludo'
};
store.dispatch(action);


