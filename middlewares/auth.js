const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {

    const authHeader = req.get('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: 'User is not authenticated' })
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'bcryptnodesecretkey');
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }
    if (!decodedToken) {
    
      return res.status(401).json({ message: 'User is not authenticated' })
    }
    req.userId = decodedToken.userId;
    next();

  } catch (error) {
    return res.status(401).json({ 
      message: 'Token was expired' 
    })
  }
};
