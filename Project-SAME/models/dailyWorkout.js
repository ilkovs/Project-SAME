module.exports = function(sequelize, DataTypes) {
    var DailyWorkout = sequelize.define("DailyWorkout", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      muscleGroup2: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      },
      muscleGroup3: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1]
      },
    });
  
    DailyWorkout.associate = function(models) {
      // We're saying that a DailyWorkout should belong to an Author
      // A DailyWorkout can't be created without an Author due to the foreign key constraint
      DailyWorkout.belongsTo(models.Plan, {
        foreignKey: {
          allowNull: false
        }
      });
      //if we make an exercise table instead of string array
    //   DailyWorkout.hasMany(models.DailyWorkout, {
    //     onDelete: "cascade"
    //   });
    };
  
    return DailyWorkout;
  };
  
  //randomcomment