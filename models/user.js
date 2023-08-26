const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Name is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    birthday: {
      type: String,
    },

    phone: {
      type: String,
    },

    city: {
      type: String,
    },

    avatarURL: String,
    // verify: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // verificationToken: {
    // 	type: String,
    // 	required: [true, 'Verify token is required'],
    // },
  },
  { versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

module.exports = User;
