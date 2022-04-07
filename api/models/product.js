const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define product schema
const productSchema = new Schema({
    _id: mongoose.Schema.OjectId,
    name: {type: String, required: true},
    price: {type: Number, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = mode('Product', productSchema);