import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import AddTodoItem from 'AddTodoItem';

describe('AddTodoItem ', () => {
  it('renders properly', () => {

    const mock = jest.fn();
    const addTodoItem = renderer.create(<AddTodoItem onAddItem={mock} />).toJSON();
    expect(addTodoItem).toMatchSnapshot();
  });

  describe('works as expected', () => {
    it('doesn\'t call onAddItem if value is empty', () => {
      const mock = jest.fn();
      const addTodoItem = shallow(<AddTodoItem onAddItem={mock} />);
      addTodoItem.find('button').simulate('submit');
      expect(mock).not.toHaveBeenCalled();
    })

    it('call onAddItem if value is empty', () => {
      const mock = jest.fn();
      const addTodoItem = mount(<AddTodoItem onAddItem={mock} />);
      const first = addTodoItem.find('input');
      first.node.value = 'fff';
      first.simulate('change', first);
      addTodoItem.find('form').simulate('submit');
      expect(mock).toHaveBeenCalledWith('fff');
      expect(first.node.value).toBe('');
    })
  })
});

