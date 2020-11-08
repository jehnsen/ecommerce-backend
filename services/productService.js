const Product = require('../models/product');

module.exports = {
    
    products: async () =>  await Product.find(),

    productById: async (id) => await Product.findById(id),

    insert: async ({ productName, price, imageUrl, categoryCode }) => {
        const product = new Product({
            productName,
            price,
            imageUrl,
            categoryCode
        })

        return await product.save();
    },

    update: async ({ id, productName, price, imageUrl, categoryCode }) => {
        return await Product.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    productName,
                    price,
                    imageUrl,
                    categoryCode
                }
            },
            { new: true },
            (err ,result) => {
                return (err) ? err : result;
            }

        )
    },

    delete: (id) =>  Product.findOneAndDelete({_id : id})
    
}
