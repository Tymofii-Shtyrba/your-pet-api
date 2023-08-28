const { Schema, model } = require('mongoose');

const noticeSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'The owner id is required'],
    },
    category: {
      type: String,
      enum: ['sell', 'lost/found', 'in good hands'],
      required: [true, 'Please choose a valid option for chooseOption'],
    },
    title: {
      type: String,
      require: [true, 'The title of the notice is required'],
    },
    name: {
      type: String,
      required: [true, 'The name of the pet is required'],
    },
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      require: [true, 'They type of the pet is required'],
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'The sex of the animal is required'],
    },
    imageURL: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      required: [true, 'The location name is required'],
    },
    price: {
      type: Number,
      default: null,
    },
    comment: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model('notice', noticeSchema);

module.exports = Notice;