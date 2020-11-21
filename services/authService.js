const User = require('../models/user');
const bcrypt = require('bcrypt')

module.exports = {
    create: async ({ email, password, role }) => {

        await User.findOne({ email: email })
            .then(userData => {
                
                // if(userData){
                //     return userData
                // }
                return bcrypt.hash(password, 12)
            })
            .then(hashedPassword => {
                console.log(hashedPassword)
                const user = new User({
                    email,
                    password: hashedPassword,
                    role
                })
                return user.save()
            })
            .catch(err => console.log(err))
    },

    logIn: async ({ email }) => {
        return await User.findOne({ email: email })
    }
}