module.exports = function (sequelize, DataTypes) {
    var LeaderBoard = sequelize.define("LeaderBoard", {
        username: DataTypes.STRING,
        totalScore: DataTypes.INTEGER
    });
    return LeaderBoard;
};