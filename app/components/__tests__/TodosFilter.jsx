import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { TodosFilter } from 'TodosFilter';

describe('TodosFilter ', () => {
  it('renders properly', () => {
    const mock = jest.fn();
    const todosFilter = renderer.create(<TodosFilter />).toJSON();
    expect(todosFilter).toMatchSnapshot();
  });

  describe('works as expected', () => {
    it('call SET_TEXT_SEARCH if input has changed', () => {
      const mock1 = jest.fn();
      const todosFilter = mount(<TodosFilter dispatch={mock1} />);
      const first = todosFilter.find('input[type="search"]');
      first.node.value = 'fff';
      first.simulate('change', first);
      expect(mock1).toHaveBeenCalledWith({ type: 'SET_TEXT_SEARCH', searchText: 'fff' });
    });

    it('call TOGGLE_SHOW_COMPLETED if checkbox has changed', () => {
      const mock1 = jest.fn();
      const todosFilter = mount(<TodosFilter dispatch={mock1} />);
      const first = todosFilter.find('input[type="checkbox"]');
      first.node.checked = true;
      first.simulate('change', { target: { checked: true } });
      expect(mock1).toHaveBeenCalledWith({ type: 'TOGGLE_SHOW_COMPLETED' });
    });
  });
});

