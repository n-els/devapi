const developers = require('../../../data/developers.js');
const getAllDevelopers = (req, res, next) => {
  res.status(200).json({
    msg: 'fetched all developers!',
    data: {
      developers,
    },
  });
};

module.exports = getAllDevelopers;
