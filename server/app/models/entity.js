/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Entity', {
  createdAt: Date,
  updatedAt: Date,
  type: {
    type: String
  },
  data: {
    type: Object,
  }
});
