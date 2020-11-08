const redisClient = require('../utils/redisClient');

const redisCache = (req, res, next) => {
    const { id } = req.params;

    redisClient.get( id, (error, cachedData) => {
        if(error) throw error

        if(cachedData != null){
            res.send(JSON.parse(cachedData));

        } else {
            next();
        }
    });
 }

 module.exports = redisCache;