const notFoundMiddleware = (res, req) =>
  res.status(404).send('Route does not exist')

module.export = notFoundMiddleware
