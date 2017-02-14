const defaultSearchState = {
  searchText: '',
  filterByComplete: false
};

export const searchReducer = function (state = defaultSearchState, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return {
        ...state,
        ...action.data
      };
    default: return state;
  }
};

export const todoListReducer = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'REMOVE_TODO':
      return state.filter(b => b.id !== action.id);
    default: return state;
  }
};

export const mapReducer = function (state = {
  isFetching: false,
  url: undefined
}, action) {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};
