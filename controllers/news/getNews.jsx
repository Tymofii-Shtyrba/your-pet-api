const NewsModel = require('../../models/newsSchema.jsx');

const news = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const news = await NewsModel.find({}, null, {
      skip: (page - 1) * limit,
      limit: limit,
    });

    res.json({ news });
  } catch (error) {
    next(error);
  }
};

module.exports = news;
