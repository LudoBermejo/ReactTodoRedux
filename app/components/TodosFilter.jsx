import React from 'react';
import { connect } from 'react-redux';
import * as ReduxActions from 'actions';

export const TodosFilter = (props) => {
  let searchTextField;
  let checkCompletedField;
  const { dispatch, showCompleted, searchText } = props;

  const handleSearch = () => {
    dispatch(ReduxActions.setTextSearch(searchTextField.value.toLowerCase()));
  };

  const handleCheckCompleted = () => {
    dispatch(ReduxActions.toggleShowCompleted());
  };

  return (
    <div className="container__header" >
      <div>
        <input
          type="search"
          ref={input => searchTextField = input }
          placeholder="Search in todos"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <label>
        <input
          type="checkbox"
          ref={input => checkCompletedField = input }
          checked={showCompleted}
          onChange={handleCheckCompleted}
        /> Show completed todos
      </label>
    </div>
  );
};

TodosFilter.propTypes = {
  showCompleted: React.PropTypes.bool,
  searchText: React.PropTypes.string,
  dispatch: React.PropTypes.func
};


export default connect(
  state => ({
    searchText: state.searchText,
    showCompleted: state.showCompleted,
  })
)(TodosFilter);
