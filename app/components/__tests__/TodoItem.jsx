import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import { shallow, mount } from 'enzyme';
import TodoItem from 'TodoItem';
import uuid from 'node-uuid';

describe('TodoItem', () => {
  it('renders properly', () => {
    const staticValue = {
      id: uuid(),
      value: 'one',
      createdAt: moment().unix(),
      completed: false
    };

    const todoItem = renderer.create(<TodoItem {...staticValue} onChangeComplete={() => {}} />).toJSON();
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

    const todoItem = shallow(<TodoItem {...staticValue} onChangeComplete={() => {}} />);
    expect(todoItem.find('li').length).toBe(1);
  });

  describe('Todo item change call prop function', () => {
    const uuidUnique = uuid();
    const staticValue = {
      id: uuidUnique,
      value: 'one',
      createdAt: moment().unix(),
      completed: false
    };

    const mock = jest.fn();
    const todoItem = mount(<TodoItem {...staticValue} onChangeComplete={mock} />);

    todoItem.simulate('click');

    expect(mock).toHaveBeenCalledWith(uuidUnique);
  });
});

