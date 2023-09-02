const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name of the pet is required'],
      minLength: 2,
      maxLength: 16,
    },

    date: {
      type: Date,
      required: true,
    },

    type: {
      type: String,
      required: [true, 'The type of the pet is required'],
      minLength: 2,
      maxLength: 16,
    },

    imageURL: {
      type: String,
      default: null,
    },

    publicId: {
      type: String,
      default: null,
    },

    comments: {

      type: String,
      required: true,
      minLength: 10,
      maxLength: 120,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const Pet = model('pet', schema);

module.exports = Pet;
