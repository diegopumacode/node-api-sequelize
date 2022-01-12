module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    dateOfBirth: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};