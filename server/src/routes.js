'use strict';
const passport = require('passport')

module.exports = function(app) {
  // Insert routes below
  app.use('/api/test', require('./api/test'));
  app.use('/auth', require('./auth/auth'));

  // All undefined asset or api routes should return a 404
  /*app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);*/

  // All other routes should redirect to the index.html
/*  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });*/
};