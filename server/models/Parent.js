const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const parentSchema = new Schema({
  parentFirstName: {
    type: String,
  },
  parentLastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
