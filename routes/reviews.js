var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET posts index. /posts/:id/reviews   . */
router.get('/', (req, res, next) => {
    res.send('/reviews')
});

/* POST reviews create. /posts/:id/reviews. */
router.post('/', (req, res, next) => {
    res.send('CREATE /reviews')
});

/* GET reviews edit. /reviews//:review_id/edit. */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT  /posts/:id/reviews//:review_id/edit')
});

/* PUT reviews update. /reviews//:review_id. */
router.put('//:review_id', (req, res, next) => {
    res.send('UPDATE  /posts/:id/reviews//:review_id')
});

/* DELETE reviews index. /reviews//:review_id. */
router.delete('//:review_id', (req, res, next) => {
    res.send('DELETE  /posts/:id/reviews//:review_id')
});

module.exports = router;