const authService = require('../services/authService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {

    await authService.create(req.body)
        .then(result => {
   
            return res.status(201).json({ 
                message: 'New user was created!',
                user: result
            })
        })
        .catch(error => res.status(500).json({ message: 'User already exists!' }))
}

exports.signin = async (req, res, next) => {
    const { email, password } = req.body
    authService.logIn(req.body)
        .then(user => {
            if(!user){
                return res.status(401).json({ message: 'User not found!' })
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if(!isEqual) {
                return res.status(401).json({ message: 'Wrong Password!' })
            }
            const token = jwt.sign(
                {
                email: loadedUser.email,
                userId: loadedUser._id
            },
            'bcryptnodesecretkey',
            {expiresIn: '1hr'}
            )
            return res.status(200).json({ token: token, userId: loadedUser._id.toString() })

        })
        .catch(err => {
            next(err)
            console.log(err)
        })
}