import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';
import { merge } from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    // case RECEIVE_TODOS:
    //   let newTodos = merge({}, state);
    //   newTodos[action]
    //   return {
    //     ...state,
    //     action.todos
    //   }
    default:
      return state;
  }

}

export default todosReducer;
