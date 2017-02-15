import { mount, shallow } from 'enzyme';
import moment from 'moment';
import uuid from 'node-uuid';
import React from 'react';
import { Provider } from 'react-redux';

import * as ReduxStore from 'reduxStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodoItem, { TodoItem } from 'TodoItem';

describe('TodoList', () => {
  it('renders properly', () => {
    const values = [
      {
        id: uuid(),
        value: 'test_one',
        createdAt: moment().unix(),
        completed: false
      },
      {
        id: uuid(),
        value: 'test_two',
        createdAt: moment().unix(),
        completed: false
      }
    ];

    const store = ReduxStore.configure({
      todoList: values
    });

    const todoList = mount(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>);
    expect(todoList.find(ConnectedTodoItem).length).toBe(2);
  });

  it('shows message when no items in list', () => {
    const todoList = mount(<TodoList todoList={[]} />);
    expect(todoList.find('p').length).toBe(1);
    expect(todoList.find(TodoItem).length).toBe(0);
  });
});

