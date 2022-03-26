const faker = require('@faker-js/faker');

const db = require('../config/connection');
const { Parent, Student } = require('../models');

db.once('open', async () => {
  // clear database
  await Parent.deleteMany({});
  await Student.deleteMany({});
  //   create parent data
  const parentData = [];
  for (let i = 0; i < 10; i += 1) {
    const parentFirstName = faker.name.firstName();
    const parentLastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    const address = faker.address.streetAddress();
    parentData.push({ parentFirstName, parentLastName, email, phone, address });
  }
  const createdParents = await Parent.collection.insertMany(parentData);

//   create students

});
