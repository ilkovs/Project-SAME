module.exports = function(sequelize, DataTypes) {
  var Plan = sequelize.define("Plan", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Plan;
};
