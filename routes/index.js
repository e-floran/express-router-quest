const express = require('express');
const tags = require('./tags');
const superMiddleware = require('./superMiddleware');

const router = express.Router();


router.use('/tags', tags);
router.use('/superMiddleware', superMiddleware);


module.exports = router;