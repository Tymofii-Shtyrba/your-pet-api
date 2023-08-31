const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    url: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const NewsModel = model("news", newsSchema);

module.exports = NewsModel;
