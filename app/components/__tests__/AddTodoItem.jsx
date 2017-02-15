import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { AddTodoItem } from 'AddTodoItem';

describe('AddTodoItem ', () => {
  it('renders properly', () => {
    const addTodoItem = renderer.create(<AddTodoItem />).toJSON();
    expect(addTodoItem).toMatchSnapshot();
  });

  describe('works as expected', () => {
    it('doesn\'t call onAddItem if value is empty', () => {
      const mock = jest.fn();
      const addTodoItem = shallow(<AddTodoItem dispatch={mock} />);
      addTodoItem.find('button').simulate('submit');
      expect(mock).not.toHaveBeenCalled();
    });

    it('call ADD_TODO action if you have clicked with a value', () => {
      const mock = jest.fn();
      const addTodoItem = mount(<AddTodoItem dispatch={mock} />);
      const first = addTodoItem.find('input');
      first.node.value = 'fff';
      first.simulate('change', first);
      addTodoItem.find('form').simulate('submit');
      expect(mock).toHaveBeenCalledWith({
        type: 'ADD_TODO',
        text: 'fff'
      });
      expect(first.node.value).toBe('');
    });
  });
});

