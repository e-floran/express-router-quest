const express = require('express');

const router = express.Router();

router.use(function (req, res, next) {
    console.log('hello middleware');
    next();
});
router.use(function (req, res, next) {
    res.send('hello world');
    next();
});

router.get('/', (req, res) => {
    // res.json(fakeTags);
});

module.exports = router;