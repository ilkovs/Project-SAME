module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Muscle = sequelize.define("Muscle", {
    //   id: {
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
      muscle: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        len: [1]
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    }, {
        timestamps: false
    });
  
    Muscle.associate = function(models) {
      // We're saying that a Muscle should belong to an Author
      // A Muscle can't be created without an Author due to the foreign key constraint
    //   Muscle.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
      Muscle.hasMany(models.Exercise, {
        foreignKey: 'muscle',
        onDelete: "cascade"
      });
    };
  
    return Muscle;
  }
  
  //added a Text column for form purposes
=======
  var Muscle = sequelize.define("Muscle", {
  //   id: {
  //     autoIncrement: true,
  //     primaryKey: true,
  //     type: DataTypes.INTEGER
  //   },
    Text: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      len: [1]
      
    }
  }, {
      timestamps: false
  });

  Muscle.associate = function(models) {
    // We're saying that a Muscle should belong to an Author
    // A Muscle can't be created without an Author due to the foreign key constraint
  //   Muscle.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
    Muscle.hasMany(models.Exercise, {
      foreignKey: 'muscle',
      onDelete: "cascade"
    });
  };

  return Muscle;
}
>>>>>>> master
