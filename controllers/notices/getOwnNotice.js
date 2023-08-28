const { Notice } = require('../../models');

const getOwnNotice = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const result = await Notice.find({ owner: _id });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getOwnNotice;
