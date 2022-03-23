const express = require('express');
const router=express.Router();

router.use('/reg', require('./reg'))
router.use('/client', require('./client'))
router.use('/employee', require('./employee'))

module.exports = router;