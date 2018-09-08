module.exports = function(sequelize, DataTypes) {
    var Muscle = sequelize.define("Muscle", {
      group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
  
    return Muscle;
  };