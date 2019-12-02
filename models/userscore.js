module.exports = function (sequelize, DataTypes) {
    var UserScore = sequelize.define("UserScore", {
        username: DataTypes.STRING,
        totalScore: DataTypes.INTEGER
    });
    UserScore.associate = function(models){
        UserScore.belongsTo(models.User, {foreignKey: 'userId'})
        UserScore.belongsTo(models.Score, {foreignKey: 'scoreId'})
        UserScore.belongsTo(models.Score, {foreingKey: 'scoreId'})
    }
    return UserScore;
};