// import User from '../models/User.js'

const register = (req, res, next) => {
  try {
    // const user = await User.create(req.body)
    // res.status(201).json({   })
    res.send('<a href="/auth/google">Authentication with Google</a>')
    // res.json({ message: 'POST new tea' })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

const loginFailure = (req, res) => {
  res.send('something went wrong...')
}

const isLogin = (req, res, next) => {
  req.user ? next() : res.sendStatus(401)
}

const protected = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    })
  }
  // res.send(`Name: ${req.user.displayName} <br/> <a href="/logout">logout</a>`)
}

const logout = (req, res) => {
  req.logout()
  req.session.destroy()
  res.send(`<a href="/register">Login agen</a>`)
}

module.exports = { register, loginFailure, isLogin, protected, logout }
