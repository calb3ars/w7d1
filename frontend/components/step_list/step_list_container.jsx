import { connect } from 'react-redux';
import StepList from './step_list';
import { allSteps } from '../../reducers/selectors';
import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions.js';

const mapStateToProps = (state, ownProps) => ({
  steps: allSteps(state, ownProps.todoId),
  todoId: allSteps(state, todoId)


});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: step => dispatch(receiveStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
