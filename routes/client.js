
const router = require('express').Router();
const client = require('../controllers/client');

router.post('/register', client.create);
router.get('/', client.getAll);

module.exports = router;


