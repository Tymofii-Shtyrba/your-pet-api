const moment = require('moment');
const { Pet } = require('../models');
const createError = require('http-errors');

const findPetFilter = async (req, res, next) => {
  try {
    const { category, date, sex } = req.query;

    const conditions = {};

    if (category) {
      conditions.category = category;
    }

    if (date) {
      const currentDate = moment();
      if (date === 'lessThan1') {
        const oneYearAgo = currentDate.clone().subtract(1, 'year');
        conditions.date = { $gte: oneYearAgo.toDate() };
      } else if (date === '1to2') {
        const twoYearsAgo = currentDate.clone().subtract(2, 'years');
        const oneYearAgo = currentDate.clone().subtract(1, 'year');
        conditions.date = {
          $lt: oneYearAgo.toDate(),
          $gte: twoYearsAgo.toDate(),
        };
      } else if (date === 'moreThan2') {
        const twoYearsAgo = currentDate.clone().subtract(2, 'years');
        conditions.date = { $lt: twoYearsAgo.toDate() };
      }
    }

    if (sex) {
      conditions.sex = sex;
    }

    const result = await Pet.find(conditions).exec();

    if (result.length === 0) {
      return next(createError(404, 'No pets found'));
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findPetFilter;
