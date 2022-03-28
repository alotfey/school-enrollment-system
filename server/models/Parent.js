const mongoose = require('mongoose');
const { Schema } = mongoose;

const parentSchema = new Schema({
  parentFirstName: {
    type: String,
  },
  parentLastName: {
    type: String,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  students: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Student'
      }
  ]
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
