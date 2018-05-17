const loggingMiddleware = logPrefix => store => next => action => {
  console.log(action.meta.count, logPrefix, action);

  return next(action);
};

export default loggingMiddleware;
