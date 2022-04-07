const express = require("express");
const router = express.Router();

//creates product route
//GET product
router.get('/', (req, res, next) => {
    res.status(200).json({
        'message': 'This handles /product enpoint for GET request'
    });
});

//POST product
router.post('/', (req, res, next) => {
    res.status(200).json({
        'message': 'Handles /product enpoint for POST request'
    });
});

module.exports = router;