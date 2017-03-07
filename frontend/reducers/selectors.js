
export const allTodos = (state) => {
  let unmapped = Object.keys(state.todos);
  return unmapped.map((key) => {
    return state.todos[key];
  });
}

export const allSteps = (state, todoId) => {
  let unmapped = Object.keys(state.steps);
  unmapped = unmapped.map((key) => {
    return state.steps[key];
  });
  return unmapped.filter((step) => step.todo_id === todoId);
}
