import React from 'react';
import { connect } from 'react-redux';
import * as ReduxActions from 'actions';

export const AddTodoItem = (props) => {
  let textInput = '';

  const { dispatch } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.value) {
      dispatch(ReduxActions.addTodo(textInput.value));
      textInput.value = '';
    }
  };

  return (
    <div className="container__footer" >
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What do you need to do?"
          ref={(input) => { textInput = input; }}
        />
        <button className="button expanded">Add todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodoItem);
