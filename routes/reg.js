

const router = require('express').Router();
const reg = require('../controllers/reg');

router.post('/register', reg.create);
router.get('/', reg.getAll);

// router.use('/api/reg', router);

module.exports = router;
