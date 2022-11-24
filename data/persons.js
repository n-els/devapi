const users = require('./users');
const developers = require('./developers');
const persons = [{ ...developers }, { ...users }];

module.exports = persons;
