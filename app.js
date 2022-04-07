const express = require('express');
const productsRoute = require('./api/routes/products');

//init server
const app = express();

//Handles routes confiquration
app.use('/products', productsRoute);

// Error handling
app.use('/', (req, res, next) => {
   const error = new Error('Oooppsss... Not Found!');
   error.status = 404;
   next(error);
});

app.use('/', (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            "message": error.message,
        }
    });
});


module.exports = app;
