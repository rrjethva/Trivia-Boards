var bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
    },
      totalScore: DataTypes.INTEGER,
      animalsScore: DataTypes.INTEGER,
      moviesScore: DataTypes.INTEGER,
      sportsScore: DataTypes.INTEGER,
      geographyScore: DataTypes.INTEGER,
      musicScore: DataTypes.INTEGER,
  });
  User.sync();

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};

