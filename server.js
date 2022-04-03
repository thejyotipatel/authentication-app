import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db
import connectDB from './db/connect.js'
// router
import authRouter from './routers/authRouter.js'
// middleware
import notFoundMiddleware from './Middleware/not-found.js'
import errorHandlerMiddleware from './error/not-found.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('server app')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)

    app.listen(port, () => {
      console.log(`server is listning on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
