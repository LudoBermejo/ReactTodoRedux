import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as reduxActions from 'actions';

const TodoItem = (props) => {
  const { id, value, completed, createdAt, completedAt, dispatch } = props;
  const todoClassName = completed ? 'todo-item todo-completed' : 'todo-item';
  function renderCreatedAt(createdAt, completedAt) {
    if (!completedAt) {
      return `Created ${moment.unix(createdAt).format('DD MM YYYY | HH:mm')}`;
    } else {
      return `Completed ${moment.unix(completedAt).format('DD MM YYYY | HH:mm')}`;
    }
  }

  function onChangeComplete(e) {
    e.preventDefault();
    dispatch(reduxActions.toggleTodo(id));
  }

  return (
    <div
      id={`list_item_${id}`}
      onClick={onChangeComplete}
      className={todoClassName}
    >
      <div>
        <input
          type="checkbox"
          checked={completed}
        />
      </div>
      <div>
        <p>{value}</p>
        <p className="todo__subtext">{renderCreatedAt(createdAt, completedAt)}</p>
      </div>

    </div>
  );
};

TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  createdAt: React.PropTypes.number.isRequired,
  completedAt: React.PropTypes.number
};

export default connect()(TodoItem);
