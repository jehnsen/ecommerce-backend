const { body } = require('express-validator')
const productService = require('../services/productService')

exports.getAll = async (req, res) => {

    await productService.products()
        .then(products => {
            return res.status(200).json({
                message: 'Fetched products successfully',
                products: products,
            })
        })
        .catch(err => {
            return res.status(404).json({ message: 'No resource found.' })
        })
}

exports.getById = async (req, res, next) => {

    const { id } = req.params

    console.log(id)
    
    await productService.productById(id)
        .then(product => {
           
            res.status(200).json({ 
                message: 'Product found.', 
                product: product 
            })
        })
        .catch(error => {
            res.status(404).json({ error })
            next(error)
        })
}

exports.create = async (req, res, next) => {

    productService.insert(req.body)
        .then(result => {
            res.status(201).json({ 
                message: 'New item created!', 
                productID: result 
            })
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
}

exports.update = (req, res, next) => {
   
    productService.update(req.body)
        .then(result => {
            if (!result) {
                return res.status(404).json({ 
                    message: 'Could not find product.' 
                })
            }
            return res.status(200).json({ 
                message: 'Product was updated!', 
                result: result 
            });
        })
        .catch(err => {
            next(err);
        });
}

exports.delete = (req, res, next) => {
    const { id } = req.params
    productService.delete(id)
        .then(result => {
            if(!result){
                res.status(404).json({message: 'Item not found!'})
            } else {
                res.status(200).json({message: 'Item was deleted!'})
            }
        })
        .catch(err => {
            next(err)
        })
}