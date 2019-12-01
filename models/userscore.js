module.exports = function (sequelize, DataTypes) {
    var UserScore = sequelize.define("UserScore", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
            scoreId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Score',
                    key: 'id'
                },
            },
        },
    });
    UserScore.associate = function(models){
        UserScore.belongsTo(models.User, {foreignKey: 'userId'})
        UserScore.belongsTo(models.Score, {foreignKey: 'scoreId'})
        UserScore.belongsTo(models.Score, {foreingKey: 'scoreId'})
    }
    return UserScore;
};