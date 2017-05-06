/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

module.exports = function (app) {
  app.use('/api/entity', require('./controllers/entity-controller'));
};
