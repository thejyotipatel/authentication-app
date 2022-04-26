const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController')

router.get('/register', authController.register)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedireact: 'http://localhost:3000/',
    failureRedireact: '/login/failed',
  })
)

module.exports = router
