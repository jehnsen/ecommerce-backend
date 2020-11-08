const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true
        },
        urlPath: {
            type: String,
            required: false
        },
        imageUrl: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false
    }
)
module.exports = mongoose.model('categories', categorySchema);