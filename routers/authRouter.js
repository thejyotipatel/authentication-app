const express = require('express')
const router = express.Router()
const passport = require('passport')
const { login, register, updateUser } = '../controllers/authController'

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedireact: 'http://localhost:3000/',
    failureRedireact: '/login/failed',
  })
)

module.export = router
