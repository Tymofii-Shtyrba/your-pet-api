const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const {handleMongooseError} = require('../helpers/handleMongooseError')

const noticeSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, 'Set title for notice'],
      },
      name: {
        type: String,
        required: [true, 'Set name for notice'],
      },
      date: {
        type: String,
        required: [true, 'Set date for notice'],
      },
      category: {
        type: String,
        enum: ["sell", "lost-found", "for-free"],
        required: [true, 'Set category for notice'],
      },
      type: {
        type: String,
        required: [true, 'Set type for notice'], 
      },
      sex: {
        type: String,
        enum: ["male", "female"],
        required: [true, 'Set sex for notice'],      
      },
      location: {
        type: String,
        required: [true, 'Set location for notice'],
      },
      price: {
        type: Number,
        required: function() {
         return this.category === 'sell'
        }
      },
      comments: {
        type: String,
        default:''
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      ownerEmail: {
        type: String,
        default:'user@example.com'
      }, 
      ownerPhone: {
        type: String,
        default:'no phone'
      },
      fileURL: String,
    },
    
      {
        timestamps: true,
        versionKey: false
    }
  );


  noticeSchema.post("save", handleMongooseError)
  const Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;