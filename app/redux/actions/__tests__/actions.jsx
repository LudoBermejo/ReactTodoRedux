import * as reduxActions from 'actions';

describe('Rexux actions ', () => {
  it('should generate search text action', () => {

    const action = {
      type: 'SET_TEXT_SEARCH',
      searchText: 'some search text'
    }

    const res = reduxActions.setTextSearch(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate toggle show complete action', () => {

    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    const res = reduxActions.toggleShowCompleted();
    expect(res).toEqual(action);
  });


  it('should generate add todo action', () => {

    const action = {
      type: 'ADD_TODO',
      text: 'some search text'
    }

    const res = reduxActions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate complete todo action', () => {

    const action = {
      type: 'TOGGLE_TODO',
      id: 5
    }

    const res = reduxActions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should generate add todos actions', () => {

    const action = {
      type: 'ADD_TODOS',
      todos: ['44', '55']
    }

    const res = reduxActions.addTodos(action.todos);
    expect(res).toEqual(action);
  });



});

