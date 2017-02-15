import React from 'react';
import { connect } from 'react-redux';

import TodoItem from 'TodoItem';


const TodoList = (props) => {
  const renderList = (listOfTodos) => {
    if (listOfTodos.length) {
      return listOfTodos.map(item => <TodoItem key={item.id} {...item} />);
    }
    return (
      <p className="container__message">No items to show</p>
    );
  };

  const { todoList } = props;
  return (
    <div>
      {renderList(todoList)}
    </div>
  );
};

TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired
};

export default connect(
  state => ({
    todoList: state.todoList
  })
)(TodoList);
