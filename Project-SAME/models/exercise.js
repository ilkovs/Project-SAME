module.exports = function (sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
        id: {
            autoIncrement: true,
            primaryKey: true,

            type: DataTypes.INTEGER

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        musclegroup: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Exercise.associate = function (models) {
        // We're saying that a Plan should belong to an Author
        // A Plan can't be created without an Author due to the foreign key constraint
        Exercise.belongsTo(models.DailyWorkout, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Exercise;
};