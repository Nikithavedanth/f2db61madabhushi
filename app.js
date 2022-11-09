var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AtlasRouter = require('./routes/Atlas');
var selectorRouter = require('./routes/selector');
var gridbuildRouter = require('./routes/gridbuild');
var resourceRouter = require('./routes/resource');
var Atlas = require("./models/Atlas");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Atlas', AtlasRouter);
app.use('/selector', selectorRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Atlas.deleteMany();
  let instance1 = new
    Atlas({
      name: "Germany", state: 'Berlin',
      stateranking: 10
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });


  let instance2 = new
    Atlas({
      name: "Thailand", state: 'Bangkok',
      stateranking: 04
    });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });


  let instance3 = new
    Atlas({
      name: "India", state: 'New Delhi',
      stateranking: 3
    });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); 3
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
