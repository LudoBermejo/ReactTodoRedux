import axios from 'axios';

export const setTextSearch = searchText => ({
  type: 'SET_TEXT_SEARCH',
  searchText
});

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

