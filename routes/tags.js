const express = require('express');
const fakeTags = require('../data/tags');
const posts = require('./posts');


const router = express.Router();
router.get('/', (req, res) => {
    res.json(fakeTags);
});

router.get('/:tagId', (req, res) => {
const tagId = Number(req.params.tagId);
const foundTag = fakeTags.find((tag) => tag.id === tagId);
if (!foundTag) {
    return res.status(404).json({
    error: 'Tag not found',
    });
}
return res.json(foundTag);
});

router.use('/:tagId/posts', posts);


module.exports = router;