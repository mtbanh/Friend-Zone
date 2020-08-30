module.exports = function (sequelize, DataTypes) {
    var Chat = sequelize.define("Chat", {
        user1: DataTypes.STRING,
        user2: DataTypes.STRING
    })
    // Chat.associate = function (models) {
    //     Chat.belongsTo(models.User, { foreignKey: {allowNull:false}})
    //     Chat.hasMany(models.ChatTransaction, {foreignKey: {allowNull: false}})
    // }

    return Chat;
}