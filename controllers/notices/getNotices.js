const moment = require('moment');
const Notice = require('../../models/notice');
const createError = require('http-errors');

const getNotices = async (req, res, next) => {
  try {
    const { title, category, page, limit, date, sex } = req.query;

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

    if (!category) {
      throw new Error('Category is required');
    }

    if (!title && !category) {
      throw new Error('Your request is empty');
    }

    const regex = new RegExp(title, 'i');

    const totalCountQuery = { title: regex, ...conditions };

    if (category) {
      totalCountQuery.category = category;
    }

    const totalCount = await Notice.countDocuments(totalCountQuery);
    const paginationLimit = parseInt(req.query.limit);

    const totalPages =
      totalCount === 0 ? 1 : Math.ceil(totalCount / paginationLimit);

    const pets = await Notice.find({ title: regex, ...conditions })
      .skip((page - 1) * limit)
      .limit(limit);

    if (pets.length === 0) {
      return next(createError(404, 'No pets found'));
    }

    res.status(200).json({ pets, page, total: totalPages });
  } catch (error) {
    next(error);
  }
};

module.exports = getNotices;

// const moment = require('moment');
// const { Notice } = require('../../models');

// const createError = require('http-errors');

// const getNotices = async (req, res, next) => {
//   try {
//     const { category, date, sex } = req.query;

//     const conditions = {};

//     if (category) {
//       conditions.category = category;
//     }

//     if (date) {
//       const currentDate = moment();
//       if (date === 'lessThan1') {
//         const oneYearAgo = currentDate.clone().subtract(1, 'year');
//         conditions.date = { $gte: oneYearAgo.toDate() };
//       } else if (date === '1to2') {
//         const twoYearsAgo = currentDate.clone().subtract(2, 'years');
//         const oneYearAgo = currentDate.clone().subtract(1, 'year');
//         conditions.date = {
//           $lt: oneYearAgo.toDate(),
//           $gte: twoYearsAgo.toDate(),
//         };
//       } else if (date === 'moreThan2') {
//         const twoYearsAgo = currentDate.clone().subtract(2, 'years');
//         conditions.date = { $lt: twoYearsAgo.toDate() };
//       }
//     }

//     if (sex) {
//       conditions.sex = sex;
//     }

//     const result = await Notice.find(conditions).exec();

//     if (result.length === 0) {
//       return next(createError(404, 'No pets found'));
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = getNotices;
