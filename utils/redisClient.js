const redis = require('redis')
const redisClient = () => {
    try {
        return redis.createClient(process.env.REDIS_PORT)
        
    } catch (error) {
        console.log(error)
    }
} 

module.exports = redisClient;
