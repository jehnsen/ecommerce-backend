const Category = require('../models/category');

module.exports = {
    
    all: async () => await Category.find(),

    findById: async (id) => await Category.findById(id),

    insert: async (params) => {

        const { code, categoryName, urlPath, imageUrl } = params
        
        const cat = new Category({
            code,
            categoryName,
            urlPath,
            imageUrl
        })

        return await cat.save();
    },

    update: async (payload) => {
        const { id, code, categoryName, urlPath, imageUrl } = payload;
        return await Category.findOneAndUpdate(
            { _id : id },
            {
                $set: {
                    code,
                    categoryName,
                    urlPath,
                    imageUrl
                }
            },
            { new: true },
            (err ,result) => {
                return (err) ? err : result;
            }
        )
    },

    delete: (id) =>  Category.findOneAndDelete({_id : id})

}

