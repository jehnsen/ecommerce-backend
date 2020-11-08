const mongoose = require('mongoose');

// mongoose
//     .connect(`mongodb+srv://admin_0321:shockwave0321@mongocluster.dq6ld.mongodb.net/ecommerce_db?retryWrites=true&w=majority`, 
//         { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
//     .then(res => {
//       console.log('mongodb initialized...')   
//     })
//     .catch(err => {
//       console.log(err)
//     })

const dbConfig = {
    url: 'mongodb://localhost:27017/ecommerce_db'
}

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database');
    process.exit();
});

module.exports = mongoose;