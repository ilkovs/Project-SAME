module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: DataTypes.STRING,
      password: DataTypes.TEXT,
      post: DataTypes.TEXT
    });
    return User;
  };
  