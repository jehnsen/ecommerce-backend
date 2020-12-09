
const express = require('express');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');

const app = express();

const csrfMiddleware = csurf({
    cookie: true
});

require('dotenv').config()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
// app.use(csrfMiddleware);
// app.use(cors({ origin: process.env.CORS_ORIGIN_URI }))
app.use(cors({
    origin: function (origin, callback) {
      // bypass the requests with no origin (like curl requests, mobile apps, etc )
      if (!origin) return callback(null, true);
   
      if (process.env.CORS_ORIGIN_URI.indexOf(origin) === -1) {
        const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

require('./loaders/index');

app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoryRouter);

module.exports = app;
