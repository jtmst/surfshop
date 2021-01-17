var express = require('express');
var router = express.Router();
const { errorHandler } = require('../middleware');
const {
    getPosts,
    newPost,
    createPost
} = require("../controllers/posts");

/* GET posts index. /posts. */
router.get('/', errorHandler(getPosts));

/* GET posts new. /posts/new. */
router.get('/new', newPost);

/* POST posts create. /posts. */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts')
});

/* GET posts show. /posts/:id. */
router.get('/:id', errorHandler(createPost));

/* GET posts edit. /posts/:id/edit. */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit')
});

/* PUT posts update. /posts/:id. */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
});

/* DELETE posts index. /posts/:id. */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
});

module.exports = router;
