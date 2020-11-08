const categoryService = require('../services/categoryService')

exports.getAllCategories = async (req, res, next) => {
  
    await categoryService.all()
        .then(categories => {
        
            return res.status(200).json({
                message: 'Fetched categories successfully',
                categories: categories,
            })
        })
        .catch(err => {
            return res.status(404).json({ message: 'No resource found.' })
        })
}

exports.getCategoryById = async (req, res, next) => {

    const { id } = req.params

    await categoryService.findById(id)
    .then(category => {
        res.status(200).json({ 
            message: 'Category found.',
            category: category 
        })
    })
    .catch(err => {
        res.status(404).json({ message: err })
        next(err)
    })
}

exports.create = async (req, res, next) => {
    categoryService.insert(req.body)
        .then(result => {
            res.status(201).json({ 
                message: 'New category created!', 
                categories: result })
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
}

exports.update = (req, res, next) => {
    categoryService.update(req.body)
        .then(result => {
            if (!result) {
                return res.status(404).json({
                    message: 'Could not find category.' 
                })
            }
        return res.status(200).json({ 
            message: 'Category was updated!', 
            result: result });
        })
        .catch(err => {
            next(err);
        });
}

exports.delete = (req, res, next) => {

    const { id } = req.params

    categoryService.delete(id)
        .then(result => {
            if(!result){
                res.status(404).json({message: 'Category not found!'})
            } else {
                res.status(200).json({message: 'Category was deleted!'})
            }
        })
        .catch(err => {
            next(err)
        })
}