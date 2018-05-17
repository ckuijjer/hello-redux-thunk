let counter = 0

const actionCountingMiddleware = store => next => action => {
  if (!action.meta) action.meta = {}
  action.meta.count = counter++

  return next(action)
}

export default actionCountingMiddleware
