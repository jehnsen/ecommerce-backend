const mongoose = require('mongoose');

const dbConfig = {
    url: process.env.MONGODB_URI
}

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => {
    console.log('mongodb initialized...')
})  
.then(() => {
    console.log('successfully connected to the database!');
}).catch(err => {
    console.log('error connecting to mongodb database...');
    process.exit();
});

module.exports = mongoose;