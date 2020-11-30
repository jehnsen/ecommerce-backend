const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {

    res.send('success!')

});

// const redisCache = require('../utils/redisCache')
// const redisClient = require('../utils/redisClient')

// const message = new Promise(function(resolve, reject) {
//     const status = false
//     if(status) {
//         resolve({ response: 'connected!' })
//     } else {
//         reject(new Error('not connected to server.'))
//     }
// })

// function setMessage() {
//     return message
//         .then(result => console.log(result.response))
//         .catch(err => err.message)
// }

// router.post('/', function(req, res) {

//     setMessage()

// });

// router.get('/todos', async function(req, res, next) {

//     const result = await fetch(
//       `https://jsonplaceholder.typicode.com/todos`,
//       {
//         method: 'GET'
//       }
//     );

//     redisClient.setex('todoList', 3600, result.body)

//     res.send(JSON.parse(result.body))

// });

// router.get('/todos/:id', redisCache, async function(req, res, next) {
//   const { id } = req.params

//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`,
//     {
//       method: 'GET'
//     }
//   );

//   redisClient.setex(id, 3600, result.body)

//   res.send(JSON.parse(result.body))

// });

module.exports = router;
