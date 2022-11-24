const users = require('../../../data/users.js');
const getAllUsers = (req, res, next) => {
  res.status(200).json({
    msg: 'fetched all users!',
    data: {
      users,
    },
  });
};

module.exports = getAllUsers;
