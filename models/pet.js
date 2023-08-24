const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const petSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["your pet", "sell", "lost/found", "in good hands"],
      required: [true, "Please choose a valid option for chooseOption"],
    },

    name: {
      type: String,
      required: [true, "The name of the pet is required"],
      minLength: 2,
      maxLength: 16,
    },

    date: {
      type: Date,
      required: true,
    },

    type: {
      type: String,
      required: [true, "The type of the pet is required"],
      minLength: 2,
      maxLength: 16,
    },

    file: {
      type: String,
      // додати валідацію файлу - обовʼязковe, обʼємом до 3Мб
    },

    sex: {
      type: String,
      enum: ["female", "male"],
      required: [true, "The sex of the pet is required"],
    },

    location: {
      type: String,
      required: function () {
        const value = this.category;

        if (value === "your pet") {
          return false;
        }
        return true;
      },
    },

    price: {
      type: Number,
      required: function () {
        return this.category === "sell";
      },
      validate: [
        {
          validator: function (value) {
            return !(this.category === "sell" && (isNaN(value) || value <= 0));
          },
          message:
            'For the "sell" category, price must be a number greater than 0.',
        },
      ],
    },

    comments: {
      type: String,
      minLength: 10,
      maxLength: 120,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

petSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = Pet;
