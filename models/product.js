const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: false
        },
        categoryCode: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('products', productSchema);