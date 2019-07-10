const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Skema data yang akan dikirim ke monggoDB
const ProductSchema = new Schema({
    productName: String,
    Price: String,
    urlImage: String,
});


module.exports = mongoose.model('Product', ProductSchema);