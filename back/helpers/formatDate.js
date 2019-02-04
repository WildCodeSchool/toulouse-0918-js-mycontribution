const moment = require('moment');

const formatDate = date => moment(date).format('YYYY-MM-DD');

const formatProjectDates = project => {
  return {
    ...project,
    startDate: formatDate(project.startDate),
    endDate: formatDate(project.endDate)
  };
};

module.exports = {
  formatDate,
  formatProjectDates
};
