const Product = require('../models/product');

exports.products = async () =>  await Product.find()

exports.productById = async (id) => await Product.findById(id)

exports.productByCategory = async (code) => {
    return await Product.find({ categoryCode: code })
}

exports.searchProduct = async (criteria, price) => {
    Object
        .keys(criteria)
        .forEach((key) => (criteria[key] == null) && delete criteria[key])

    return await Product.find(criteria)
}

exports.insert = async ({ productName, price, imageUrl, categoryCode, description }) => {
    const product = new Product({
        productName,
        price,
        imageUrl,
        categoryCode,
        description
    })

    return await product.save();
}

exports.update = async (product) => {
    return await Product.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                productName: product.productName,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
                categoryCode: product.categoryCode,
                size: product.size,
                color: product.color
            }
        },
        { new: true },
        (err ,result) => {
            return (err) ? err : result;
        }
    )
}

exports.delete = (id) =>  Product.findOneAndDelete({_id : id})