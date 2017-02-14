import uuid from 'node-uuid';
import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import { shallow, mount } from 'enzyme';
import TodoApp from 'TodoApp';


describe('Todo app', () => {
  it('renders properly', () => {
    const todoApp = renderer.create(<TodoApp />).toJSON();
    expect(todoApp).toMatchSnapshot();
  });

  it('should add to do item', () => {
    const todoApp = shallow(<TodoApp />);
    const todoList = todoApp.instance().state.todoList;
    const numberOfItems = todoList.length;
    todoApp.instance().addTodoItem('demo');
    expect(todoApp.instance().state.todoList.length).toBe(numberOfItems + 1);
    expect(todoApp.instance().state.todoList[todoApp.instance().state.todoList.length-1].value).toBe('demo');
  });

  it('should change completed item and add specific date', () => {
    const todoApp = shallow(<TodoApp />);
    todoApp.instance().setState({
      todoList: [
        {
          id: uuid(),
          value: 'first',
          createdAt: moment().unix(),
          completed: false,
        },
        {
          id: uuid(),
          value: 'Second',
          createdAt: moment().unix(),
          completed: false
        },
        {
          id: uuid(),
          value: 'Third',
          createdAt: moment().unix(),
          completed: false
        },
        {
          id: uuid(),
          value: 'Fourth',
          createdAt: moment().unix(),
          completed: false
        }
      ]
    });

    expect(todoApp.instance().state.todoList[0].completed).toBeFalsy();
    expect(todoApp.instance().state.todoList[0].completedAt).toBeUndefined();
    todoApp.instance().changeCompleteTodo(todoApp.instance().state.todoList[0].id);
    expect(todoApp.instance().state.todoList[0].completed).toBeTruthy();
    expect(todoApp.instance().state.todoList[0].completedAt).toBeDefined();

  });

  it('should remove completedAt if item is not completed', () => {
    const todoApp = shallow(<TodoApp />);
    todoApp.instance().setState({
      todoList: [
        {
          id: uuid(),
          value: 'first',
          createdAt: moment().unix(),
          completed: true,
          completedAt: moment().unix(),
        }
      ]
    });

    expect(todoApp.instance().state.todoList[0].completedAt).toBeDefined();
    todoApp.instance().changeCompleteTodo(todoApp.instance().state.todoList[0].id);
    expect(todoApp.instance().state.todoList[0].completed).toBeFalsy();
    expect(todoApp.instance().state.todoList[0].completedAt).toBeUndefined();

  });

  it('should store data even if you refresh', () => {
    const todoApp = shallow(<TodoApp />);
    todoApp.instance().setState({
      todoList: [
      ]
    });
    expect(todoApp.instance().state.todoList.length).toBe(0);

    todoApp.instance().setState({
      todoList: [
        {
          id: uuid(),
          value: 'Fourth',
          createdAt: moment().unix(),
          completed: false
        }
      ]
    });
    expect(todoApp.instance().state.todoList.length).toBe(1);

    const todoApp2 = shallow(<TodoApp />);
    expect(todoApp2.instance().state.todoList.length).toBe(1);

  });



});

