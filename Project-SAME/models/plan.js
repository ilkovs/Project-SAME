module.exports = function(sequelize, DataTypes) {
    var Plan = sequelize.define("Plan", {
      id: {
        autoIncrement: true,
        primaryKey: true,

        type: DataTypes.INTEGER

      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
  
    Plan.associate = function(models) {
      // We're saying that a Plan should belong to an Author
      // A Plan can't be created without an Author due to the foreign key constraint
      Plan.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Plan.hasMany(models.DailyWorkout, {
        onDelete: "cascade"
      });
    };
  
    return Plan;
  };
  