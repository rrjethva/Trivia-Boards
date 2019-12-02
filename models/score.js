module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        email: DataTypes.STRING,
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        answered: DataTypes.INTEGER,
        correct: DataTypes.INTEGER,
        totalScore: DataTypes.INTEGER
    });
    Score.sync();

    Score.associate = function (models) {
        Score.belongsToMany(models.User, {
            through: "UserScore",
            as: "users",
            foreignKey: "scoreId",
            otherKey: "userId"
        });
    };
    return Score;
};