const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../controllers/authController')

router.get('/', authController.register)
router.get('/auth/failure', authController.loginFailure)

router.get('/protected', authController.isLogin, authController.protected)

router.get('/logout', authController.logout)

// google routes
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth/failure',
  })
)

// github routes
router.get('/github', passport.authenticate('github', { scope: ['profile'] }))

router.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['email', 'profile'] })
)

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth/failure',
  })
)

// router.get(
//   '/google/callback',
//   passport.authenticate('google', {
//     successRedireact: 'http://localhost:5000/',
//     failureRedireact: '/login/failed',
//   })
// )

module.exports = router
