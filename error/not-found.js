const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  res.status(500).json({ msg: 'there was error' })
}

export default errorHandlerMiddleware
