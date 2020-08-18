module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });
    User.associate = function (models) {
      User.hasMany(models.Chat, { onDelete: "cascade" });
    };
    return User;
  }
  
  
  