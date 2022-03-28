const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Parent {
    _id: ID
    parentFirstName: String
    parentLastName: String
    email: String
    phone: String
    address: String
    students: [Student]
  }
  type Student {
    _id: ID
    studentFirstName: String
    studentLastName: String
    birthdate: String
    gender: String
    gradeEntering: String
  }
  type Query {
    parent: [Parent]
  }
`;

module.exports = typeDefs;
