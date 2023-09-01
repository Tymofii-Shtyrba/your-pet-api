const NewsModel = require('../../models/newsSchema.jsx');

const findNews = async (req, res) => {
  try {
    const { title, page, limit } = req.query;

    if (!title) {
      throw new Error('Your request is empty');
    }

    const regex = new RegExp(title, 'i');

    const news = await NewsModel.find({ title: regex })
      .skip((page - 1) * limit)
      .limit(limit);

    if (news.length === 0) {
      throw new Error('No results for your request');
    }

    res.json({ news });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || 'An error occurred' });
  }
};

module.exports = findNews;
