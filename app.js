var path = require('path'),
           fs = require('fs'),
           express = require('express'),
           ejs = require('ejs'),
           stylus = require('stylus'),
           nib = require('nib'),
           middleware = require('./lib/middleware'),
           routes = require('./lib/routes');

// Initialize Express
var app = module.exports = express();

// Setup the rendering engine
app.engine('ejs', ejs.__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));

// Template locals
app.locals.pageName = '';
app.locals.bodyClass = '';
app.locals.host = '';

// Setup logging
// Logging (http://www.senchalabs.org/connect/logger.html) middleware
app.use(express.logger('dev'));

// Stylus middleware with nib support
app.use(stylus.middleware({
  src: app.get('public'),
  dest: app.get('public'),
  compile: function(str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .use(nib())
      .import('nib');
  }
}));

// Static file middleware
app.use(express.static(app.get('public')));

// Normalize the URL by stripping off the trailing / and .html
app.use(middleware.normalizeUrl());

// 404 handler
/*app.use(function(req, res, next) {
  // Redirect to index for resources that can't be found
  res.redirect('/');
});*/

// Error handler
app.use(function(err, req, res, next) {
  console.error('*** Uncaught Error ***');
  console.error(err);
  console.error(err.stack);

  var status;
  if (err instanceof Error && typeof err.status === 'number') status = err.status;

  res.send(status || 500);
});

// Initialize the application routes
app.get('/', function(req, res, next) {
  res.render('index');
});


// Initialize the application routes
//routes(app);

// Listening on port 8001
app.listen(5001);
console.log('The Magazine listening on port 5001');

