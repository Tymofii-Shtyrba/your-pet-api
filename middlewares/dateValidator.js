const validateDate = (date) => {
  const dateFormat = /^\d{2}-\d{2}-\d{4}$/;

  if (!date.match(dateFormat)) {
    throw new Error('Invalid date format. Please use "DD-MM-YYYY" format.');
  }
  return true;
};

module.exports = validateDate;
