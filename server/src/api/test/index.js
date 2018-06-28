const express = require('express')
const router = express.Router()
const queries = require('./queries')

router.get('/', queries.getAllTests);
router.get('/:id', queries.getSingleTest);

module.exports = router;
