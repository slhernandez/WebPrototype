//var utils = require('./utils');

module.exports = function(app) {

  // Root route
  app.get('/', function(req, res) {
    console.log('this actually reached here...')
    res.render('index', {
      pageTitle: 'Homepage of Steve Hernandez',
    });
  });

  app.get('/post', function(req, res) {
    res.render('article', {
      pageTitle: 'Article Title' 
    });
  });

};
