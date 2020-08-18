module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
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
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    
    User.addHook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function (models) {
      User.hasMany(models.Chat, { onDelete: "cascade" });
    };
    
    return User;
  }
  
  
  