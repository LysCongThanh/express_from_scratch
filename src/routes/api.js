const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send({123: 123})
})

module.exports = router;