const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { Parent, Student } = require('../models');

db.once('open', async () => {
  // clear database
  await Parent.deleteMany({});
  await Student.deleteMany({});
  //   create parent data
  const parentData = [];
  const studentData = [];
  for (let i = 0; i < 10; i += 1) {
    const parentFirstName = faker.name.firstName();
    const parentLastName = faker.name.lastName();
    const email = faker.internet.email(parentFirstName,parentLastName);
    const phone = faker.phone.phoneNumberFormat(3);
    console.log(phone);
    const address = faker.address.streetAddress();
    parentData.push({ parentFirstName, parentLastName, email, phone, address });
  }
  const createdParents = await Parent.collection.insertMany(parentData);
  // create student
  for (let i = 0; i < 10; i += 1) {
    const studentFirstName = faker.name.firstName();
    const studentLastName = '';
    const birthdate = new Date(faker.date.past(15));
    const gender = faker.name.gender(true);
    const gradeEntering = 'grade ' + faker.mersenne.rand(1, 10);
    studentData.push({
      studentFirstName,
      studentLastName,
      birthdate,
      gender,
      gradeEntering,
    });
  }
  const createdStudent = await Student.collection.insertMany(studentData);

  console.log('faking data done');
  process.exit(0);
});
