import React from 'react';

import TodoList from 'TodoList';
import AddTodoItem from 'AddTodoItem';
import TodosFilter from 'TodosFilter';

const TodoApp = props => (
  <div>
    <h1 className="page-title">Todo App</h1>
    <div className="row">
      <div className="column small-centered small-11 medium-6 large-5">
        <div className="container">
          <TodosFilter />
          <TodoList />
          <AddTodoItem />
        </div>
      </div>
    </div>
  </div>
);

export default TodoApp;