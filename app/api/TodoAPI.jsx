const TodoAPI = {
  setTodos: (todos) => {
    if (Array.isArray(todos)) {
      window.localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: () => JSON.parse(window.localStorage.getItem('todos') || '[]'),
  searchTodos: (todos, showCompleted, searchText) => {
    const filteredArray = todos.filter(
      item => ((searchText && item.value.toLowerCase().includes(searchText)) || (!searchText))
          && ((!showCompleted && !item.completed) || (showCompleted))
    );

    return filteredArray.sort((a, b) => {
      if(!a.completed) return -1;
      if(!b.completed) return 1;
      return 0;
    })
  }
};

export default TodoAPI;
