import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Provider} from 'react-redux';

import * as ReduxStore from 'reduxStore';
import { TodoList } from 'TodoList';
import TodoApp from 'TodoApp';


describe('Todo app', () => {
  it('should render TodoList', () => {
    const store = ReduxStore.configure();
    const todoApp = mount(
      <Provider store={store}>
        <TodoApp />
      </Provider>);

    expect(todoApp.find(TodoList).length).toBe(1);
  });
});

