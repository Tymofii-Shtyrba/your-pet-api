const { Schema, model } = require('mongoose');

// const { handleMongooseError } = require('../helpers');

// const petSchema = new Schema(
//   {
//     category: {
//       type: String,
//       enum: ['my-pet', 'sell', 'lost/found', 'in-good-hands'],
//       required: [true, 'Please choose a valid option for chooseOption'],
//     },

//     name: {
//       type: String,
//       required: [true, 'The name of the pet is required'],
//       minLength: 2,
//       maxLength: 16,
//     },

//     date: {
//       type: Date,
//       required: true,
//     },

//     type: {
//       type: String,
//       required: [true, 'The type of the pet is required'],
//       minLength: 2,
//       maxLength: 16,
//     },

//     imageURL: {
//       type: String,
//       default: null,
//     },

//     publicId: {
//       type: String,
//       default: null,
//     },

//     sex: {
//       type: String,
//       enum: ['female', 'male'],
//       required: [true, 'The sex of the pet is required'],
//     },

//     location: {
//       type: String,
//       required: function () {
//         const value = this.category;

//         if (value === 'my-pet') {
//           return false;
//         }
//         return true;
//       },
//     },

//     price: {
//       type: Number,
//       required: function () {
//         return this.category === 'sell';
//       },
//       validate: [
//         {
//           validator: function (value) {
//             return !(this.category === 'sell' && (isNaN(value) || value <= 0));
//           },
//           message:
//             'For the "sell" category, price must be a number greater than 0.',
//         },
//       ],
//     },

//     comment: {
//       type: String,
//       minLength: 10,
//       maxLength: 120,
//     },

//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: 'user',
//       required: true,
//     },
//   },

//   { versionKey: false, timestamps: true }
// );

// petSchema.post('save', handleMongooseError);

// const Pet = model('pet', petSchema);

// module.exports = Pet;

const schema = new Schema(
  {
    category: {
      type: String,
      enum: ['my-pet', 'sell', 'lost/found', 'in-good-hands'],
      required: [true, 'Please choose a valid option for chooseOption'],
    },

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

    sex: {
      type: String,
      enum: ['female', 'male'],
      required: [false, 'The sex of the pet is not required'],
    },

    location: {
      type: String,
      default: null,
    },

    price: {
      type: Number,
      default: null,
    },

    comment: {
      type: String,
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
