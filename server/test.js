import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // An object representing a random contact card containing many properties

console.log(randomName);