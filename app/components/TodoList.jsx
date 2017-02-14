import React from 'react';
import TodoItem from 'TodoItem';

const TodoList = (props) => {
  const renderList = (listOfTodos) => {
    if(listOfTodos.length) {
      return listOfTodos.map(item => <TodoItem key={item.id} {...item} onChangeComplete={props.onChangeItemComplete} />);
    } else {
      return (
        <p className="container__message">No items to show</p>
      )
    }
  }

  const { todoList } = props;
  return (
    <div>
        {renderList(todoList)}
    </div>
  );
};

TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired,
  onChangeItemComplete: React.PropTypes.func.isRequired
};

export default TodoList;
