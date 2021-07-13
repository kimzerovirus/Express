const express = require('express');
const router = express.Router();
const sampledb = require('../model/sample');

router.get('/test', function (req, res) {
    sampledb.selectAll(req,res);
})

module.exports = router;