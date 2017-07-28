var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = TaskSchema;

