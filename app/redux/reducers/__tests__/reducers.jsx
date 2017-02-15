import * as reduxReducers from 'reducers';
import df from 'deep-freeze-strict';
import uuid from 'uuid';
import moment from 'moment';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_TEXT_SEARCH',
        searchText: 'some search text'
      };

      const res = reduxReducers.searchReducer(df(''), df(action));

      expect(res).toBe(action.searchText);
    });
  });

  describe('showCompleteReducer', () => {
    it('should set toggleShowCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      const res = reduxReducers.showCompleteReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todoReducer', () => {
    it('should add todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'A simple todo'
      };

      const res = reduxReducers.todoListReducer([], df(action));
      expect(res.length).toBe(1);
      expect(res[0].value).toBe(action.text);
    });

    it('should complete todo', () => {
      const myId = uuid();
      const action = {
        type: 'TOGGLE_TODO',
        id: myId
      };

      const res = reduxReducers.todoListReducer(df([{
        id: myId,
        value: 'A text',
        completed: false,
        createdAt: moment().unix()
      }]), df(action));
      expect(res[0].completedAt).toBeDefined();
      expect(res[0].completed).toBe(true);
    });

    it('should uncomplete todo', () => {
      const myId = uuid();
      const action = {
        type: 'TOGGLE_TODO',
        id: myId
      };

      const res = reduxReducers.todoListReducer(df([{
        id: myId,
        value: 'A text',
        completed: true,
        createdAt: moment().unix()
      }]), df(action));
      expect(res[0].completedAt).toBeUndefined();
      expect(res[0].completed).toBe(false);
    });
  });
});
