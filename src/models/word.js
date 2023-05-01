const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Word', wordSchema, 'programming_words');
