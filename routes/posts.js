const express = require('express');
const fakePosts = require('../data/posts');
const comments = require('./comments');


const router = express.Router({ mergeParams: true });
router.get('/', (req, res) => {
    const tagId = Number(req.params.tagId);
    const tagPosts = fakePosts.filter((post) => post.tag_id === tagId);
    res.json(tagPosts);
});

router.get('/:postId', (req, res) => {
const postId = Number(req.params.postId);
const foundPost = fakePosts.find((post) => post.id === postId);
if (!foundPost) {
    return res.status(404).json({
    error: 'Post not found',
    });
}
return res.json(foundPost);
});

router.use('/:postId/comments', comments);


module.exports = router;