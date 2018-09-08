module.exports = function(sequelize, DataTypes) {
    var DailyWorkout = sequelize.define("DailyWorkout", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      weekday: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,7]
        }
      },
      lifts: {
          type: DataTypes.TEXT,
          allowNull: false,
          len: [1]
      },
      muscleGroup1: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      muscleGroup2: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
      muscleGroup3: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      },
    });
  
    DailyWorkout.associate = function(models) {

      // We're saying that a DailyWorkout should belong to a Plan
      // A DailyWorkout can't be created without an Plan due to the foreign key constraint

      DailyWorkout.belongsTo(models.Plan, {
        foreignKey: {
          allowNull: false
        }
      });
      DailyWorkout.hasMany(models.Exercise, {
        onDelete: "cascade"
    });
      //if we make an exercise table instead of string array
    //   DailyWorkout.hasMany(models.DailyWorkout, {
    //     onDelete: "cascade"
    //   });
    };
  
    return DailyWorkout;
  };

