const { Parent, Student } = require('../models');

const resolvers = {
  Query: {
    parent: async () => {
      return Parent.find()
    }
  },
};

module.exports = resolvers;
