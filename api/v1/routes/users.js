const { Router } = require('express');
const getAllUsers = require('../controllers/getAllUsers');

const router = Router();

router.route('/').get(getAllUsers);

module.exports = router;
