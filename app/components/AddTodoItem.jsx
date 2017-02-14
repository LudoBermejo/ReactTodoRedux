import React from 'react';

const AddTodoItem = (props) => {
  let textInput = '';

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.value) {
      props.onAddItem(textInput.value);
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

AddTodoItem.propTypes = {
  onAddItem: React.PropTypes.func.isRequired
};

export default AddTodoItem;
