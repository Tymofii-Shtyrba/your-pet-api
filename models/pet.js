const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const petSchema = new Schema(
  {
    chooseOption: {
      type: String,
      enum: ["your pet", "sell", "lost/found", "in good hands"],
      required: [true, "Please choose a valid option for chooseOption"],
    },

    titleOfAdd: {
      type: String,
    },

    petsName: {
      type: String,
    },

    dateOfBirth: {
      type: Date,
    },

    typeOfPet: {
      type: String,
      required: [true, "The type of the pet is required"],
    },

    petsImage: {
      type: String,
    },

    theSex: {
      type: String,
      enum: ["female", "male"],
      required: [true, "The sex of the pet is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required for the pet"],
    },

    price: {
      type: Number,
      required: [true, "price is required"],
    },

    comments: {
      type: String,
      minLength: 10,
      maxLength: 300,
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
