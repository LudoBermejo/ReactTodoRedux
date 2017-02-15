import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import { shallow, mount } from 'enzyme';
import { TodoItem } from 'TodoItem';
import uuid from 'node-uuid';

describe('TodoItem', () => {
  it('renders properly', () => {
    const staticValue = {
      id: uuid(),
      value: 'one',
      createdAt: moment().unix(),
      completed: false
    };

    const todoItem = renderer.create(<TodoItem {...staticValue} />).toJSON();
    expect(todoItem).toMatchSnapshot();
  });

  describe('Todo item show', () => {
    const uuidUnique = uuid();
    const staticValue = {
      id: uuidUnique,
      value: 'one',
      createdAt: moment().unix(),
      completed: false
    };

    const todoItem = shallow(<TodoItem {...staticValue} />);
    expect(todoItem.find('input').length).toBe(1);
  });

  describe('should dispatch TOGGLE_TODO action on click', () => {
    const uuidUnique = uuid();
    const staticValue = {
      id: uuidUnique,
      value: 'one',
      createdAt: moment().unix(),
      completed: false
    };

    const mock = jest.fn();
    const todoItem = mount(<TodoItem {...staticValue} dispatch={mock} />);

    todoItem.simulate('click');

    expect(mock).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: uuidUnique
    });
  });
});

