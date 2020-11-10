
const express = require('express');
const cookieParser = require('cookie-parser');
const csurf = require('csurf')
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');

const app = express();

const csrfMiddleware = csurf({
    cookie: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(csrfMiddleware);
app.use(cors({ origin: 'http://localhost:3000' }))

require('./loaders/index');

app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoryRouter);

module.exports = app;
