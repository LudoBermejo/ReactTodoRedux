import axios from 'axios';

export const changeSearch = data => ({
  type: 'CHANGE_SEARCH',
  data
});

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const startLocationFetch = () => ({
  type: 'START_LOCATION_FETCH'
});

export const completeLocationFetch = url => ({
  type: 'COMPLETE_LOCATION_FETCH',
  url
});

export const fetchLocation = () => (dispatch) => {
  dispatch(startLocationFetch());

  axios.get('http://ipinfo.io')
      .then((res) => {
        const loc = res.data.loc;
        const baseURL = `http://maps.google.com?q=${loc}`;
        dispatch(completeLocationFetch(baseURL));
      });
};

