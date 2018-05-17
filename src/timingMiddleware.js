import { PAUSE, RESUME } from './reducers/timing';

let isPaused = false;
let queue = [];

const timingMiddleware = store => next => action => {
  if (action.type === PAUSE) {
    isPaused = true;
    return next(action);
  }

  if (action.type === RESUME) {
    isPaused = false;

    queue.forEach(a => {
      next(a);
    });
    queue = [];

    return next(action);
  }

  if (isPaused) {
    queue.push(action);
  } else {
    return next(action);
  }
};

export default timingMiddleware;

// Planned solution
// - when paused, all actionCreators (simple and thunk) are paused
// - so we wrap every actionCreator in another promise that resolves with the original actionCreator when it's unpaused
