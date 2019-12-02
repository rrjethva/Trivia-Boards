module.exports = function (sequelize, DataTypes) {
    var UserScore = sequelize.define("UserScore", {
        username: DataTypes.STRING,
        totalScore: DataTypes.INTEGER
    });
    return UserScore;
};