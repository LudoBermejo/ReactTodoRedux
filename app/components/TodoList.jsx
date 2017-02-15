import React from 'react';
import { connect } from 'react-redux';

import TodoItem from 'TodoItem';
import TodoAPI from 'TodoAPI';


export const TodoList = (props) => {
  const renderList = (listOfTodos) => {


    if (listOfTodos.length) {
      return listOfTodos.map(item => <TodoItem key={item.id} {...item} />);
    }
    return (
      <p className="container__message">No items to show</p>
    );
  };

  const { todoList, searchText, showCompleted } = props;
  const filteredTodo = TodoAPI.searchTodos(todoList, showCompleted, searchText );

  return (
    <div>
      {renderList(filteredTodo)}
    </div>
  );
};

TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired,
  searchText: React.PropTypes.string,
  showCompleted: React.PropTypes.bool
};

export default connect(
  state => state
)(TodoList);
