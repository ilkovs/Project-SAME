module.exports = function(sequelize, DataTypes) {
    var Muscle = sequelize.define("Muscle", {
      id: {
        autoIncrement: true,
        primaryKey: true,

        type: DataTypes.INTEGER

      },
      group: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
  
    return Muscle;
  };