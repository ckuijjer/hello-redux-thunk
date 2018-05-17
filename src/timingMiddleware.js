import { PAUSE, RESUME } from './reducers/timing';

let pausedActions = [];

const timingMiddleware = store => next => action => {
  if (action.type === PAUSE) return next(action);

  if (action.type === RESUME) {
    console.log('resuming...');
    pausedActions.forEach(a => {
      console.log('resuming', a);
      next(a);
    });
    pausedActions = [];
    return next(action);
  }

  const { timing } = store.getState();

  if (timing.paused) {
    console.log('adding', action);
    pausedActions.push(action);
  } else {
    return next(action);
  }
};

export default timingMiddleware;

// Planned solution
// - when paused, all actionCreators (simple and thunk) are paused
// - so we wrap every actionCreator in another promise that resolves with the original actionCreator when it's unpaused
