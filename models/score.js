module.exports = function (sequelize, DataTypes) {

    var Score = sequelize.define("Score", {
        answered: DataTypes.INTEGER,
        correct: DataTypes.INTEGER,
        totalScore: DataTypes.INTEGER
    });
    
    Score.associate = function (models) {
        Score.belongsToMany(models.UserData, {
            through: "LeaderBoard",
            as: "UserName",
            foreignKey: "scoreId",
            otherKey: "usernameId"
        });
    };
    return Score;
};