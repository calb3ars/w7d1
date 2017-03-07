import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions.js';
import merge from 'lodash/merge';

let initialStep = {
    1: { // this is the step with id = 1
      id: 1,
      title: "walk to store",
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: "buy soap",
      done: false,
      todo_id: 1
    }
  };


const stepsReducer = (state = initialStep, action) => {
  switch (action.type) {
    case RECEIVE_STEP:
      let newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case RECEIVE_STEPS:
      newState = {}
      action.steps.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default stepsReducer;
