var bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 5
      }
    }
  });
  User.sync();

  User.associate = function (models) {
    User.belongsToMany(models.Score, {
      through: "UserScore",
      as: "scores",
      foreignKey: "userId",
      // otherKey: "scoreId"
    });
  };
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};

