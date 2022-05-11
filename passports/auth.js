const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github2').Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/google/callback',
      passReqToCallBack: true,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)
// github

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/github/callback',
      passReqToCallBack: true,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)
passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (user, done) {
  done(null, user)
})
