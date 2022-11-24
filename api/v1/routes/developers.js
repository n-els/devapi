const { Router } = require('express');
const getAllDevelopers = require('../controllers/getAllDevelopers');

const router = Router();

router.route('/').get(getAllDevelopers);

module.exports = router;
