const router = require('express').Router();
const employee = require('../controllers/employee');

router.post('/register', employee.create);
router.get('/', employee.getAll);

module.exports = router;