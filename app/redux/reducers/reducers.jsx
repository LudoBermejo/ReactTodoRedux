import uuid from 'uuid';
import moment from 'moment';

export const searchReducer = function (state = { searchText: '' }, action) {
  switch (action.type) {
    case 'SET_TEXT_SEARCH':
      return action.searchText;
    default:
      return state;
  }
};

export const showCompleteReducer = function (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export const todoListReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: uuid(),
          value: action.text,
          completed: false,
          createdAt: moment().unix()
        }

      ];
    case 'TOGGLE_TODO':
      const newState = state.map((item) => {
        if (item.id === action.id) {
          const nextCompleted = !item.completed;

          return {
            ...item,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }
        return item;
      });
      return newState;
    default: return state;
  }
};
