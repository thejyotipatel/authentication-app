const loginFailure = (req, res) => {
  res.send('something went wrong...')
}

const protected = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    })
  }
}

const logout = (req, res) => {
  if (req.user) {
    req.logout()
    req.session.destroy()
    res.status(200).json({ success: true, message: 'logout' })
  }
}

module.exports = { loginFailure, protected, logout }
