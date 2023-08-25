const moment = require("moment");
const { Pet } = require("../models");
const createError = require("http-errors");

const searchPets = async (req, res, next) => {
  try {
    const { category, date, sex } = req.query;

    const conditions = {};

    if (category) {
      conditions.category = category;
    }

    if (date) {
      const currentDate = moment();
      const petBirthdate = moment(date);
      const ageInYears = currentDate.diff(petBirthdate, "years");

      if (ageInYears === 0) {
        conditions.date = { $gte: petBirthdate.startOf("day").toDate() };
      } else if (ageInYears === 1) {
        conditions.date = {
          $gte: petBirthdate.startOf("day").subtract(1, "year").toDate(),
          $lt: petBirthdate.startOf("day").toDate(),
        };
      } else if (ageInYears > 1) {
        conditions.date = {
          $lt: petBirthdate.startOf("day").subtract(1, "year").toDate(),
        };
      }
    }

    if (sex) {
      conditions.sex = sex;
    }

    const result = await Pet.find(conditions).exec();

    if (result.length === 0) {
      next(createError(404, "No pets found"));
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = searchPets;
