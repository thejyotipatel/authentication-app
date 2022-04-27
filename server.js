const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const session = require('express-session')
const passport = require('passport')
const router = require('./routers/authRouter')
require('./passports/auth')

app.use(express.json())

app.use(session({ secret: 'cats' }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', router)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listning on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
