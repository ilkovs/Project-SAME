module.exports = function(sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
      exercise: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
          len: [1]
      },
      muscle: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
        }
    }, {
        timestamps: false
    });
  
    Exercise.associate = function(models) {
      // We're saying that a Exercise should belong to an Author
      // A Exercise can't be created without an Author due to the foreign key constraint
      Exercise.belongsTo(models.Muscle, {
        foreignKey: {
            name: 'muscle',
            allowNull: false
        }
      });
      //if we make an exercise table instead of string array
    //   Exercise.hasMany(models.Exercise, {
    //     onDelete: "cascade"
    //   });
    };
  
    return Exercise;
  };
  
