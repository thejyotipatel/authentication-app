const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const session = require('express-session')
const passport = require('passport')
require('./passports/auth')

const { register } = require('./controllers/authController')

const isLogin = (req, res, next) => {
  req.user ? next() : res.sendStatus(401)
}

app.use(express.json())

app.use(session({ secret: 'cats' }))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', register)
// (req, res) => {
//   res.send('<a href="/auth/google">Authentication with Google</a>')
// })

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
)

app.get('/auth/failure', (req, res) => {
  res.send('something went wrong...')
})

app.get('/protected', isLogin, (req, res) => {
  res.send(`Name: ${req.user.displayName} <br/> <a href="/logout">logout</a>`)
})

app.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.send(`<a href="/">Login agen</a>`)
})
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
