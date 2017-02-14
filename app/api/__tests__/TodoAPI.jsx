import React from 'react';
import TodoAPI from 'TodoAPI';
import uuid from 'node-uuid';
import moment from 'moment';

describe('TodoAPI', () => {
  it('should gets emmpty array at first', () => {
    expect(TodoAPI.getTodos()).toEqual([]);
  });

  it('should gets emmpty array if you put a non array ', () => {
    TodoAPI.setTodos('invalid');
    expect(TodoAPI.getTodos()).toEqual([]);

    TodoAPI.setTodos(55);
    expect(TodoAPI.getTodos()).toEqual([]);
  });

  it('should store valid data if you put a array ', () => {
    TodoAPI.setTodos(['demo', 'demo2']);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(['demo', 'demo2']);

    const complexArray = [
      {
        id: uuid(),
        value: 'first',
        createdAt: moment().unix(),
        completed: false
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
    ];

    TodoAPI.setTodos(complexArray);

    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(complexArray);
  });

  it('should return valid data if you put a array ', () => {
    window.localStorage.setItem('todos', JSON.stringify(['demo', 'demo2']));
    expect(TodoAPI.getTodos()).toEqual(['demo', 'demo2']);

    const complexArray = [
      {
        id: uuid(),
        value: 'first',
        createdAt: moment().unix(),
        completed: false
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
    ];

    window.localStorage.setItem('todos', JSON.stringify(complexArray));

    expect(TodoAPI.getTodos()).toEqual(complexArray);
  });

  describe('filter todo items', () => {
    const complexArray = [
      {
        id: uuid(),
        value: 'first',
        createdAt: moment().unix(),
        completed: false
      },
      {
        id: uuid(),
        value: 'Second',
        createdAt: moment().unix(),
        completed: false
      },
      {
        id: uuid(),
        value: 'Completed',
        createdAt: moment().unix(),
        completedAt: moment().unix(),
        completed: true
      },
      {
        id: uuid(),
        value: 'Fourth',
        createdAt: moment().unix(),
        completed: false
      }
    ];

    it('should show only uncompleted todos if not filter is applied', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, false, '');
      expect(filteredArray.length).toBe(3);
    });

    it('should show all todos if show completed is applied', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, true, '');
      expect(filteredArray.length).toBe(4);
    });

    it('should show filtered, uncompleted todos if search text is applied', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, false, 't');
      expect(filteredArray.length).toBe(2);
    });

    it('should show filtered, completed todos if search text and show completed is applied', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, true, 't');
      expect(filteredArray.length).toBe(3);
    });

    it('should order array based on not completed first', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, true, '');
      expect(filteredArray.length).toBe(4);
      expect(filteredArray[3].value).toBe('Completed');
      expect(filteredArray[3].completed).toBeTruthy();
    });

    it('should order array based on not completed first', () => {
      const filteredArray = TodoAPI.searchTodos(complexArray, true, '');
      expect(filteredArray.length).toBe(4);
      expect(filteredArray[3].value).toBe('Completed');
      expect(filteredArray[3].completed).toBeTruthy();
    });
  });
});

