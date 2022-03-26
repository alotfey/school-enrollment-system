const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  studentFirstName: {
    type: String,
  },
  studentLastName: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  gender: {
    type: String,
  },
  gradeEntering: {
      type: String
  }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
