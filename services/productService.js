const Product = require('../models/product');

module.exports = {
    
    products: async () =>  await Product.find(),

    productById: async (id) => await Product.findById(id),

    productByCategory: async (code) => {
        let res = await Product.find({ categoryCode: code })
        console.log(res)
        return res;
    },

    insert: async ({ productName, price, imageUrl, categoryCode, description }) => {
        const product = new Product({
            productName,
            price,
            imageUrl,
            categoryCode,
            description
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
