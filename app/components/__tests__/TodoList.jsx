import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import TodoItem from 'TodoItem';

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

    const todoList = renderer.create(<TodoList todoList={values} onChangeItemComplete={() => {}} />).toJSON();
    expect(todoList).toMatchSnapshot();
  });

  describe('List items properly', () => {
    it('renders all list of items', () => {
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

      const todoList = mount(<TodoList todoList={values} onChangeItemComplete={() => {}} />);
      expect(todoList.find(TodoItem).length).toBe(2);
    });

    it('shows message when no items in list', () => {
      const todoList = mount(<TodoList todoList={[]} onChangeItemComplete={() => {}} />);
      expect(todoList.find('p').length).toBe(1);
      expect(todoList.find(TodoItem).length).toBe(0);
    })
  });



});

