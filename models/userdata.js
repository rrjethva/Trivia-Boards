module.exports = function (sequelize, DataTypes) {
  var UserData = sequelize.define("UserData", {
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    // image: DataTypes.image
  });
  return UserData;
};

UserData.associate = function (models) {
  UserData.belongsToMany(models.Score, {
    through: "LeaderBoard",
    as: "Score",
    foreignKey: "usernameId",
    otherKey: "scoreId"
  });
  return UserData;
};
