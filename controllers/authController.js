// import User from '../models/User.js'

const register = async (req, res) => {
  try {
    // const user = await User.create(req.body)
    // res.status(201).json({   })
    res.send('<a href="/auth/google">Authentication with Google</a>')
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

const login = (req, res) => {
  res.send('login')
}

const updateUser = (req, res) => {
  res.send('update User')
}

module.exports = { login, register, updateUser }
