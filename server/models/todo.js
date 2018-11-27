let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: Boolean
  }
});

module.exports = {Todo};
