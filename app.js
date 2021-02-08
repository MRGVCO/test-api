
const sequelize = require('./models');
const models = require('./models');
const routes = require('./routes');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var usersRouter = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
// app.use('/amenity', routes.amenity);
// app.use('/leads', routes.lead);
// app.use('/apartment', routes.apartment);
// app.use('/business', routes.business);
// app.use('/floorPlans', routes.floorPlans);
// app.use('/messages', routes.message);
// app.use('/photos', routes.photos);
// app.use('/session', routes.session);
 app.use('/users', usersRouter);
// app.use('/apartments', routes.apartment);
// app.use('/emails', routes.email);
// app.use('/designs', routes.design);
// app.use('/company', routes.company);
// app.use('/authenticate', routes.authenticate);

module.exports = app;
