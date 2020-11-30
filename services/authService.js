const User = require('../models/user');
// const bcrypt = require('bcrypt')

exports.findUserByEmail = async ({ email }) => {
    return await User.findOne({ email: email })
}

// exports.create = async ({ email, password, role }) => {
//     await User.findOne({ email: email })
//         .then(existingUser => {
//             if(!existingUser){
//                 bcrypt.hash(password, 12).then(async hashedPassword => {
//                     const user = new User({
//                         email,
//                         password: hashedPassword,
//                         role
//                     })
//                     return await user.save()
//                 })
                
//             }
//             return existingUser;
//         })
// }

exports.logIn = async ({ email }) => {
    return await User.findOne({ email: email })
}
