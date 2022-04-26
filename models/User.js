const mongoos = require('mongoose')
const validetar = require('validator')
const UserSchema = new mongoos.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validetar.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  photo: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    default: null,
    maxlength: 10,
  },
  bio: {
    type: String,
    default: 'Hi, there!',
    maxlength: 100,
    trim: true,
  },
})

export default mongoos.model('User', UserSchema)
